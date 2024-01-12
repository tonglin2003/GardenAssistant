package com.gardenBackend.gardenAssistant.controller;

import com.gardenBackend.gardenAssistant.model.UserPlant;
import com.gardenBackend.gardenAssistant.service.UserPlantService;
import org.apache.catalina.User;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userPlant")
public class UserPlantController {
    private final UserPlantService userPlantService;

    public UserPlantController(UserPlantService userPlantService){
        this.userPlantService = userPlantService;
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<UserPlant> getUserPlantById(@PathVariable("id")String plantId){
        UserPlant userPlant = userPlantService.getUserPlantById(plantId);
        return new ResponseEntity<>(userPlant, HttpStatus.OK);
    }

    @GetMapping("/find/user/{userId}")
    public ResponseEntity<List<UserPlant>> getUserPlantByUserId(@PathVariable("userId")String userId){
        List<UserPlant> userPlants = userPlantService.getUserPlantByUserId(userId);
        return new ResponseEntity<>(userPlants, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<UserPlant> addUserPlant(@RequestBody UserPlant userPlant){
        // either frontend include the userId or the backend include the userId

        // for now frontend will provide the userId
        UserPlant plant = userPlantService.addUserPlant(userPlant);
        return new ResponseEntity<>(plant, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<UserPlant> updateUserPlant(@RequestBody UserPlant userPlant){
        UserPlant plant = userPlantService.updateUserPlant(userPlant);
        return new ResponseEntity<>(plant, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUserPlant(@PathVariable("id") String plantId){
        // need to check if the current userId is the same as the plant found

        // but for now, we will just simply delete it
        userPlantService.deleteUserPlant(plantId);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}

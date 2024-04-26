package com.gardenBackend.gardenAssistant.controller;

import com.gardenBackend.gardenAssistant.model.UserPlantDiary;
import com.gardenBackend.gardenAssistant.service.UserPlantDiaryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "${frontendUrl}")
@RequestMapping("/userPlant/diary")
public class UserPlantDiaryController {
    private final UserPlantDiaryService userPlantDiaryService;


    public UserPlantDiaryController(UserPlantDiaryService userPlantDiaryService) {
        this.userPlantDiaryService = userPlantDiaryService;
    }

    @PostMapping("/add")
    public ResponseEntity<UserPlantDiary> addNewUserPlantDiary(@RequestBody UserPlantDiary userPlantDiary){
        userPlantDiary.setCreatedAt(new Date());

        UserPlantDiary diary = userPlantDiaryService.addNewPlantDiary(userPlantDiary);
        return new ResponseEntity<>(diary, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<UserPlantDiary> updateUserPlantDiary(@RequestBody UserPlantDiary userPlantDiary){
        UserPlantDiary diary = userPlantDiaryService.updatePlantDiary(userPlantDiary);
        return new ResponseEntity<>(diary, HttpStatus.OK);
    }

    @GetMapping("/userId/{userId}")
    public ResponseEntity<List<UserPlantDiary>> getUserPlantDiaryByUserId(@PathVariable("userId")String userId){
        List<UserPlantDiary> diaries = userPlantDiaryService.findPlantDiaryByUserId(userId);
        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @GetMapping("/plantId/{plantId}")
    public ResponseEntity<List<UserPlantDiary>> getUserPlantDiaryByPlantId(@PathVariable("plantId")String plantId){
        List<UserPlantDiary> diaries = userPlantDiaryService.findPlantDiaryByPlantId(plantId);
        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }
}

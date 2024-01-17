package com.gardenBackend.gardenAssistant.controller;

import com.gardenBackend.gardenAssistant.model.User;
import com.gardenBackend.gardenAssistant.model.responseModel.ResponseUser;
import com.gardenBackend.gardenAssistant.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ResponseUser>> getAllUser(){
        List<ResponseUser> responseUsers = new ArrayList<>();
        List<User> allUser = userService.getAllUser();

        for (User user : allUser) {
            // Create a ResponseUser object with only the desired fields
            ResponseUser responseUser = new ResponseUser(user.getUserId(), user.getAccountUsername(), user.getAvatarUrl(), user.getUsername());
            // note: getAccountUsername() returns the Username
            // getUsername() returns the account of the user, e.g. example@gmail.com

            responseUsers.add(responseUser);
        }

        return new ResponseEntity<>(responseUsers, HttpStatus.OK);
    }

    @GetMapping("/getUser/{userId}")
    public ResponseEntity<ResponseUser> getUserById(@PathVariable("userId") String userId){
        User user = userService.getUserById(userId);
        ResponseUser responseUser = new ResponseUser(user.getUserId(), user.getAccountUsername(), user.getAvatarUrl(), user.getUsername());

        return new ResponseEntity<>(responseUser, HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<ResponseUser> updateUser(@RequestBody User updateUser){
        User user = userService.updateUser(updateUser);

        ResponseUser responseUser = new ResponseUser(user.getUserId(), user.getAccountUsername(), user.getAvatarUrl(), user.getUsername());

        return new ResponseEntity<>(responseUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable("userId") String userId){
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

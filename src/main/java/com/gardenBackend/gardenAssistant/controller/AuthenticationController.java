package com.gardenBackend.gardenAssistant.controller;

import com.gardenBackend.gardenAssistant.model.auth.AuthenticationRequest;
import com.gardenBackend.gardenAssistant.model.auth.AuthenticationResponse;
import com.gardenBackend.gardenAssistant.model.auth.RegisterRequest;
import com.gardenBackend.gardenAssistant.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;


@RestController
@CrossOrigin(origins = "${frontendUrl}")
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
            ) {
        return ResponseEntity.ok(service.authentication(request));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
            ){
        return ResponseEntity.ok(service.register(request));
    }

    @GetMapping("/testConnection")
    public String testConnection(){
        System.out.println("In the default page");
        return "Welcome to the app";
    }
}

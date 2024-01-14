package com.gardenBackend.gardenAssistant.service;

import com.gardenBackend.gardenAssistant.config.JwtService;
import com.gardenBackend.gardenAssistant.model.User;
import com.gardenBackend.gardenAssistant.model.auth.AuthenticationRequest;
import com.gardenBackend.gardenAssistant.model.auth.AuthenticationResponse;
import com.gardenBackend.gardenAssistant.model.auth.RegisterRequest;
import com.gardenBackend.gardenAssistant.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;


    public AuthenticationResponse register(RegisterRequest request){
        User user = new User(
                request.getUsername(),
                request.getAvatarUrl(),
                request.getAccount(),
                passwordEncoder.encode(request.getPassword())
        );

        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authentication(AuthenticationRequest request){

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(
                        request.getAccount(),
                        request.getPassword()
                );

        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        var user = userRepository.findByAccount(request.getAccount())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

}

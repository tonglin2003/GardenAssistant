package com.gardenBackend.gardenAssistant.service;

import com.gardenBackend.gardenAssistant.model.User;
import com.gardenBackend.gardenAssistant.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    public User updateUser(User user){
        String encodedPassword = passwordEncoder.encode(user.getPassword());

        System.out.println("I reached the Service for update user");

        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public void deleteUser(String userId){
        userRepository.deleteById(userId);
    }

    public List<User> getAllUser(){
        System.out.println("Im in the service, control group");
        return userRepository.findAll();
    }

    public User userLogin(User user) {
        User attemptLogin = userRepository.findByAccount(user.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (passwordEncoder.matches(user.getPassword(), attemptLogin.getPassword())) {
            return attemptLogin;
        } else {
            return null;
        }
    }

    public User getUserById(String userId){
        return userRepository.findUserByUserId(userId);
    }

}

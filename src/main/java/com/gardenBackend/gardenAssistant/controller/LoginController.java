package com.gardenBackend.gardenAssistant.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class LoginController {

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String showLoginPage() {
        System.out.println("trying to login ");
        return "welcome";
    }

    @GetMapping("/")
    public String defaultFunc(){
        System.out.println("In the default page");
        return "hello";
    }

}
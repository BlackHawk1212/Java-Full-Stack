package com.bank.bankmanagementsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController     //@Controller
public class RegisterController {

    @GetMapping("/findAllData")
    public String getAllData(){
        return "Data Fetched Successfully";
    }

    @GetMapping("/saveRegister")
    public String saveRegister(){
        return "Data Fetched Successfully";
    }

    @GetMapping("/fetchByUsername")
    public String fetchByUsername(){
        return "Data Fetched Successfully";
    }

}

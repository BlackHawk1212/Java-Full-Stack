package com.bank.bankmanagementsystem.controller;

import com.bank.bankmanagementsystem.model.Register;
import com.bank.bankmanagementsystem.service.RegisterServiceIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController     //@Controller
public class RegisterController {

    @Autowired
    RegisterServiceIntf service;

    @PostMapping("/saveUser")
    public String saveUser(@RequestBody Register register){
        service.saveUser(register);
        return "Data saved Successfully";
    }

    @GetMapping("/getUserByName/{name}")
    public Register getUserByName(@PathVariable("name") String name){
        return service.getUserByName(name);
    }

    @GetMapping("/getAllUsers")
    public List<Register> getAllUsers(){
        /*List<Register> list = new LinkedList<>();
        list.add(new Register(1,"Nimesh","nimesh@gmail.com"));
        list.add(new Register(2,"Anne","anne@gmail.com"));*/
        List<Register> ls = new LinkedList<>();
        ls = service.getAllUsers();
        return ls;
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") int id){
        Optional<Register> rs = service.getUserById(id);
        if(rs.isPresent()){
            service.deletedById(id);
        } else {
            return "No Data Found";
        }
        return "Delete Successfully";
    }

}

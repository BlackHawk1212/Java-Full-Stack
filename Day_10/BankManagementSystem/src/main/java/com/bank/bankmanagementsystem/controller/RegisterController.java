package com.bank.bankmanagementsystem.controller;

import com.bank.bankmanagementsystem.exception.UserNameNotFoundException;
import com.bank.bankmanagementsystem.model.Register;
import com.bank.bankmanagementsystem.service.RegisterServiceIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController     //@Controller
@CrossOrigin(origins = "*")
public class RegisterController {

    @Autowired
    RegisterServiceIntf service;

    @PostMapping("/saveUser")
    public ResponseEntity<Register> saveUser(@RequestBody Register register){
        service.saveUser(register);
        return new ResponseEntity<>(register, HttpStatus.CREATED);
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

    @GetMapping("/getByUserId/{userId}")
    public Register getById(@PathVariable("userId") int userId){
        Register rs = service.getByUserId(userId);
        return rs;
    }

    @GetMapping("/fetchByNameAndAge/{name}/{age}")
    public List<Register> fetchByNameAndAge(@PathVariable("name") String name,@PathVariable("age") int age){
        List<Register> ls = new LinkedList<>();
        ls = service.fetchByNameAndAge(name,age);
        return ls;
    }

    @GetMapping("fetchByName/{name}")
    public Register fetchByName(@PathVariable("name") String name) throws UserNameNotFoundException {
        Register reg = service.fetchByName(name);
        if(reg == null){
            throw new UserNameNotFoundException("Username Not Found");
        }
        return reg;
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<String> deleteById(@PathVariable("id") int id){
        Optional<Register> rs = service.getUserById(id);
        if(rs.isPresent()){
            service.deletedById(id);
        } else {
            return new ResponseEntity<>("No Data Found",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Delete Successfully",HttpStatus.OK);
    }

}

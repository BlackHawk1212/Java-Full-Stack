package com.bank.bankmanagementsystem;

import com.bank.bankmanagementsystem.dao.RegisterRepo;
import com.bank.bankmanagementsystem.model.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.LinkedList;
import java.util.List;

@SpringBootApplication
public class BankManagementSystemApplication {

    @Autowired
    RegisterRepo repo;

    public static void main(String[] args) {
        SpringApplication.run(BankManagementSystemApplication.class, args);
    }

    @PostConstruct
    public void saveUser(){
        List<Register> ls = new LinkedList<>();
        ls.add(new Register(5,"Jonny",35,"jonny@gmail.com"));
        ls.add(new Register(6,"Law",35,"law@gmail.com"));
        repo.saveAll(ls);
    }

}

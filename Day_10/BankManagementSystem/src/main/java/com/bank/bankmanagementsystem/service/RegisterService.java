package com.bank.bankmanagementsystem.service;

import com.bank.bankmanagementsystem.dao.RegisterRepo;
import com.bank.bankmanagementsystem.model.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService implements RegisterServiceIntf{

    @Autowired
    RegisterRepo repo;

    public Register saveUser(Register register) {
        repo.save(register);
        return register;
    }

    @Override
    public Register getUserByName(String name) {
        return repo.findByName(name);
    }

    @Override
    public List<Register> getAllUsers() {
        return repo.findAll();
    }

    @Override
    public Optional<Register> getUserById(int id) {
        return repo.findById(id);
    }

    @Override
    public void deletedById(int id) {
        repo.deleteById(id);
    }

    @Override
    public List<Register> fetchByNameAndAge(String name, int age) {
        return repo.findByNameAndAge(name, age);
    }

    @Override
    public Register fetchByName(String name) {
        return repo.findByName(name);
    }

    @Override
    public Register getByUserId(int userId) {
        return repo.findByUserId(userId);
    }

}
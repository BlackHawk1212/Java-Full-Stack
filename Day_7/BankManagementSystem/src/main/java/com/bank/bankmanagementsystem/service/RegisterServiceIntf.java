package com.bank.bankmanagementsystem.service;

import com.bank.bankmanagementsystem.model.Register;

import java.util.List;
import java.util.Optional;

public interface RegisterServiceIntf {

    Register saveUser(Register register);

    Register getUserByName(String name);

    List<Register> getAllUsers();

    Optional<Register> getUserById(int id);

    void deletedById(int id);

    List<Register> fetchByNameAndAge(String name, int age);

    Register fetchByName(String name);

}

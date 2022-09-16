package com.bank.bankmanagementsystem.model;

import javax.persistence.*;

@Entity
@Table(name="tbl_register")
public class Register {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;

    public Register(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Register() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return email;
    }

    public void setAge(String age) {
        this.email = age;
    }

    @Override
    public String toString() {
        return "Register{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

}

package com.bank.bankmanagementsystem.dao;

import com.bank.bankmanagementsystem.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegisterRepo extends JpaRepository<Register,Integer> {

    Register findByName(String name);   //select * from table_name where name=?

    @Query("select reg from Register reg where reg.name=:name and reg.age=:age")
    List<Register> findByNameAndAge(String name, int age);

}

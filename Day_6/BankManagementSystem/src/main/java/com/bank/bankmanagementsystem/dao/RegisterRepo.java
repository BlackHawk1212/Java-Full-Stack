package com.bank.bankmanagementsystem.dao;

import com.bank.bankmanagementsystem.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepo extends JpaRepository<Register,Integer> {

    Register findByName(String name);   //select * from table_name where name=?

}

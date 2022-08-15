package com.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
//@Component("st")
public class Student {
	
	private int id;
//	@Value("Nimesh")
	private String name;
//	@Value("25")
	private int age;
	@Autowired
	@Qualifier("address")
	private Address address;
	
	public Student() {
		System.out.println("Student Default Constructor");
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", age=" + age + ", address=" + address + "]";
	}

}

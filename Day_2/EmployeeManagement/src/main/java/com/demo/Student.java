package com.demo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
//@AllArgsConstructor
public class Student {
	
	private int id;
	private String name;
	private int age;
	private Address address;
	
	public Student() {
		System.out.println("Student Default Constructor");
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", age=" + age + ", address=" + address + "]";
	}

}

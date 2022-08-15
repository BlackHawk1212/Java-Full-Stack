package com.demo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
//@AllArgsConstructor
public class Employee {
	
	private int id;
	private String name;
	private int age;
	
	public Employee() {
		System.out.println("Employee Default Constructor");
	}
	
	

}

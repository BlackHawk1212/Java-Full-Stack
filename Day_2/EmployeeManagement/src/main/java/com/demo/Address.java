package com.demo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Address {
	
	private int id;
	private String city;
	private String state;
	
	@Override
	public String toString() {
		return "Address [id=" + id + ", city=" + city + ", state=" + state + "]";
	}

}

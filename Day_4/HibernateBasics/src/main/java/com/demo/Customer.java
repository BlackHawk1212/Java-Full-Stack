package com.demo;

import jakarta.persistence.*;

@Entity
@Table(name="tblcustomer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cusId;
	private String cusName;
	
	public int getCusId() {
		return cusId;
	}
	public void setCusId(int cusId) {
		this.cusId = cusId;
	}
	public String getCusName() {
		return cusName;
	}
	public void setCusName(String cusName) {
		this.cusName = cusName;
	}
	
	@Override
	public String toString() {
		return "Customer [cusId=" + cusId + ", cusName=" + cusName + "]";
	}

}

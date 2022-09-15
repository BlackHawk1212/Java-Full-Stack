package com.demo;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name="tblvendor")
public class Vendor {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	@JoinColumn(name="VendorId")
	@JoinTable(name="Vendor_Customer",
			joinColumns = @JoinColumn(name="VendId"),
			inverseJoinColumns = @JoinColumn(name="CustId")
			)
	private int vendId;
	private String venName;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Customer> customer;
	public int getVendId() {
		return vendId;
	}
	public void setVendId(int vendId) {
		this.vendId = vendId;
	}
	public String getVenName() {
		return venName;
	}
	public void setVenName(String venName) {
		this.venName = venName;
	}
	
	@Override
	public String toString() {
		return "Customer [vendId=" + vendId + ", venName=" + venName + "]";
	}

}

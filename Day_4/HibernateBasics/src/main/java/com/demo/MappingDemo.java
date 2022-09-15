package com.demo;

import java.util.LinkedList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class MappingDemo {

	public static void main(String[] args) {
		
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory sf = config.buildSessionFactory();
		Session session = sf.openSession();
		Transaction tx = session.beginTransaction();
		
		Vendor vendor = new Vendor();
		vendor.setVenName("NIIT");
		
		Customer cust1 = new Customer();
		cust1.setCusName("Virtusa");
		
		Customer cust2 = new Customer();
		cust2.setCusName("HCL");
		
		List<Customer> ls = new LinkedList<>();
		ls.add(cust1);
		ls.add(cust2);
		
		vendor.setCustomer(ls);
		session.save(vendor);
		
		tx.commit();
		
	}

}

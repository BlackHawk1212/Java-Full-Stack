package com.demo;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Main {

	public static void main(String[] args) {	// Per Container Per Bean
		
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
//		Resource resource = new ClassPathResource("beans.xml");
//		XmlBeanFactory factory = new XmlBeanFactory(resource);
//		Employee emp = context.getBean("emp",Employee.class);
//		emp.setId(1);
//		emp.setName("Nimesh");
		
//		System.out.println(emp.getId() + " " + emp.getName());
		
//		System.out.println(emp.getId() + " " + emp.getName() + " " + emp.getAge());
		
		Student st = context.getBean("st",Student.class);
		System.out.println(st);

	}

}

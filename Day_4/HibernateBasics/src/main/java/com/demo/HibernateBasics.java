package com.demo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

public class HibernateBasics {

	public static void main(String[] args) {

		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory sf = config.buildSessionFactory();
		Session session = sf.openSession();

//		Department dept = session.get(Department.class, 1); // select * from tablename where id = 1
//		System.out.println(dept);
		

		// HQL //
//		Query query = session.createQuery("from Department");
//		Query query = session.createQuery("from Department where name='Nimesh'");
//		List <Department> ls = query.list();
//		ls.forEach(dept->System.out.println(dept));
		

		// NativeSQL //
//		Query query = session.createSQLQuery("select * from tbl_department").addEntity(Department.class);
//		Query query = session.createSQLQuery("select * from tbl_department where deptname='Nimesh'").addEntity(Department.class);
//		List <Department> ls = query.list();
//		ls.forEach(dept->System.out.println(dept));
		

		// HCQL //
//		Criteria c = session.createCriteria(Department.class);
//		c.addOrder(Order.asc("name"));
//		List<Department> dept = c.list();
//		dept.forEach(dept1->System.out.println(dept1));
//		c.add(Restrictions.like("name","N__"));
//		List<Department> dept = c.list();
//		dept.forEach(dept1->System.out.println(dept1));
		
		
		

		Transaction tx = session.beginTransaction();
//
//		Department dept = new Department();
//
//		dept.setName("Nimesh");
//		dept.setAddress("Ragama");
//		session.save(dept);
//
//		tx.commit();
//
//		System.out.println("Success");
		
		// NamedQuery //
		Query query = session.getNamedQuery("findByDeptName");
		query.setParameter("deptname", "Nimesh");
		List<Department> ls = query.list();
		ls.forEach(dept->System.out.println(dept));

	}

}
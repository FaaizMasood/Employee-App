package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;

@Repository
// jpa repository provides us with crud methods for databases , out of the box implementations 
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
}

package com.spbrj.sri.backendspringboot.repository;

import com.spbrj.sri.backendspringboot.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //all crud database methods
}

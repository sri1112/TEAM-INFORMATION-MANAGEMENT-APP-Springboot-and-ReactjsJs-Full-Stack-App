package com.spbrj.sri.backendspringboot.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.spbrj.sri.backendspringboot.entity.Employee;

public interface EmployeeService {
    public Employee addEmp(Employee employee);
//    public Employee getOneEmp(Long id);
//	public Employee deleteEmp(Long id);
    
    
    public List<Employee> getAllEmp();
    public ResponseEntity<Employee> updateOneEmp(Employee employee, Long id);
	public ResponseEntity<Employee> getEmployee(Long id);
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id);
}

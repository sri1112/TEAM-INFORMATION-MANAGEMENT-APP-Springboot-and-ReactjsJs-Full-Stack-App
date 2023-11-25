package com.spbrj.sri.backendspringboot.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spbrj.sri.backendspringboot.entity.Employee;
import com.spbrj.sri.backendspringboot.service.EmployeeServiceImpl;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
//    autowired the employee service
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;

	// get all employee details
	@GetMapping("/employees")
	public List<Employee> allEmpDetails() {
		List<Employee> empCon = employeeServiceImpl.getAllEmp();
		return empCon;
	}
//	 add employee details
	@PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee){
		Employee addEmp = employeeServiceImpl.addEmp(employee);
        return addEmp;
    }
	/*
	//get one employee details
	@GetMapping("/employees/{id}")
	public Employee getOneEmp(@PathVariable long id) {
		Employee getOne = employeeServiceImpl.getOneEmp(id);
		return getOne;
	}
	*/
	//get 1 employee details
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getOneEmployee(@PathVariable Long id){
		ResponseEntity<Employee> getOne = employeeServiceImpl.getEmployee(id);
		return getOne;
	}
	/*
	//get one employee details
	@DeleteMapping("/employees/{id}")
	public Employee deleteOneEmp(@PathVariable long id) {
		Employee deleteOne = employeeServiceImpl.deleteEmp(id);
		return deleteOne;
	}
	*/
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmp(@PathVariable Long id){
		ResponseEntity<Map<String, Boolean>> employee = employeeServiceImpl.deleteEmployee(id);
		return employee;
	}
	
	
	//get update employee details
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateOneEmp(@RequestBody Employee employee, @PathVariable long id) {
		ResponseEntity<Employee> update = employeeServiceImpl.updateOneEmp(employee, id);
		return update;
	}
}

package com.spbrj.sri.backendspringboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.spbrj.sri.backendspringboot.entity.Employee;
import com.spbrj.sri.backendspringboot.exception.ResourceNotFoundException;
import com.spbrj.sri.backendspringboot.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getAllEmp() {
		List<Employee> empser = employeeRepository.findAll();
		return empser;
	}

	@Override
	public Employee addEmp(Employee employee) {
		Employee addEmp = employeeRepository.save(employee);
		return addEmp;
	}

	/*
	@Override
	public Employee getOneEmp(Long id) {
		Employee getOne = employeeRepository.findById(id).get();
		return getOne;
	}
	
	*/
	@Override
	public ResponseEntity<Employee> getEmployee(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
/*
	@Override
	public Employee deleteEmp(Long id) {
		Employee deleteEmpOne = employeeRepository.findById(id).get();
		employeeRepository.delete(deleteEmpOne);
		return deleteEmpOne;
	}
*/
	@Override
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(Long id){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@Override
	public ResponseEntity<Employee> updateOneEmp(Employee employee, Long id) {
		Employee updateEmpOne = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		updateEmpOne.setFirstName(employee.getFirstName());
		updateEmpOne.setLastName(employee.getLastName());
		updateEmpOne.setEmail(employee.getEmail());
		updateEmpOne.setMobile(employee.getMobile());
		Employee update = employeeRepository.save(updateEmpOne);
		return ResponseEntity.ok(update);
	}

	
}

import React, { useEffect, useState } from "react";
import EmployeeSevice from "../services/EmployeeSevice";
import { Link } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  const getAllEmployee = () => {
    EmployeeSevice.getAllEmployee().then((response) => {
      setEmployee(response.data)
      console.log(response.data)
  }).catch((error) =>{
      console.log(error)
  })
  }
  const deleteEmployee = (employeeId) =>{
    console.log(employeeId);
    EmployeeSevice.deleteEmployee(employeeId).then((response) => {
      getAllEmployee();
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className="container">
      <h2 className="text-center" style={{margin:"20px 0 20px  0 "}}>List Employees</h2>
      <table className="table table-bordered table-striped" >
        <thead className="text-center">
          <th >Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th>Employee Phone Number</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>
                <Link className="btn btn-success" to={`/edit-employee/${employee.id}`}>Update</Link>
                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;

import React, { useEffect, useState } from "react";
// import { useHistoty } from "react-router-dom";
import { useNavigate, Link, useParams } from "react-router-dom";

import EmployeeSevice from "../services/EmployeeSevice";

const UpdataEmployeeComponent = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  // const history = useHistoty();
  const navigate = useNavigate();
  const { id } = useParams();

  const updateEmployee = (event) => {
    event.preventDefault();

    const employee = { firstName, lastName, email, mobile };
    console.log(employee);

    EmployeeSevice.updateEmployee(id,employee)
      .then((response) => {
        console.log(response.data);
        // history.push("/employees");
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    EmployeeSevice.getEmployeeById(id)
      .then((response) => {
        setfirstName(response.data.firstName);
        setlastName(response.data.lastName);
        setemail(response.data.email);
        setmobile(response.data.mobile);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-mvghvd-3">
            <h2 className="text-center">Update Employee</h2>
           
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(event) => setfirstName(event.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(event) => setlastName(event.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Email Id</label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(event) => setemail(event.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Enter mobile Number"
                    name="phone"
                    className="form-control"
                    value={mobile}
                    onChange={(event) =>
                      setmobile((evnet) => event.target.value)
                    }   
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={(event) => updateEmployee(event)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger" style={{marginLeft:"10px"}}>
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdataEmployeeComponent;


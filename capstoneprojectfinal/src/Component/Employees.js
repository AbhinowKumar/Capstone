import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function Employees() {
  const [employee, setEmployee] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [emailDisabled, setEmailDisabled] = useState(false);
  //const [lastEmployeeId, setLastEmployeeId] = useState("");
  const [employeeToUpdate, setEmployeeToUpdate] = useState("");
  const [employeeButtonText, setEmployeeButtonText] = useState("Add");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const DeleteEmployee = (employee) => {
    if (
      window.confirm(`Are you sure you want to delete "${employee.name}" ?`)
    ) {
      axios
        .delete("http://localhost:8000/Users/" + employee.id)
        .then((employees) => {
          ResetEmployeeForm();
          GetEmployees();
        })
        .catch((err) => console.log(err));
    }
  };
  const InitUpdateEmployee = (employee) => {
    setEmployeeToUpdate(employee);
    setName(employee.name);
    setSalary(employee.salary);
    setEmail(employee.email);
    setDesignation(employee.designation);
    setEmployeeButtonText("Update");
    setEmailDisabled(true);
  };

  const GetEmployees = () => {
    axios
      .get("http://localhost:8000/Users")
      .then((employees) => {
        setEmployee(employees.data);
      })
      .catch((err) => console.log(err));
  };

  const ResetEmployeeForm = () => {
    setEmployeeToUpdate("");
    setName("");
    setSalary("");
    setEmail("");
    setDesignation("");
    setEmployeeButtonText("Add");
    setEmailDisabled(false);
  };

  const AddUser = (event) => {
    event.preventDefault();
    setEmailError("");
    setNameError("");
    if (name === "") {
      setNameError("*Please enter your name");
      return;
    }
    if (email === "") {
      setEmailError("*Please enter your email");
      return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("*Please enter a valid email");
      return;
    }

    if (employeeToUpdate !== "") {
      axios
        .put("http://localhost:8000/Users/" + employeeToUpdate.id, {
          name: name,
          salary: salary,
          email: email,
          designation: designation,
        })
        .then((employees) => {
          ResetEmployeeForm();
          GetEmployees();
        })
        .catch((err) => console.log(err));
    } else {
      axios.get("http://localhost:8000/Users").then((employees) => {
        const lastdata = employees.data.slice(-1)[0].id;
        axios
          .post("http://localhost:8000/Users", {
            id: lastdata + 1,
            name: name,
            salary: salary,
            email: email,
            designation: designation,
          })
          .then((employees) => {
            ResetEmployeeForm();
            GetEmployees();
          })
          .catch((err) => console.log(err));
      });
    }
  };
  useEffect(() => {
    GetEmployees();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h5 className="home-heading">Add Employee</h5>
          <div className="container">
            <form>
              <div className="form-group">
                <div className="row mb-1">
                  <div className="col-4">
                    <label>Name*</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      required={true}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <i className="lblError">{nameError}</i>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-4">
                    <label>Email*</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      required={true}
                      className="form-control"
                      value={email}
                      disabled={emailDisabled}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <i className="lblError"> {emailError}</i>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-4">
                    <label>Salary</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-4">
                    <label>Designation</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-success w-100" onClick={AddUser}>
                      {employeeButtonText}
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      value="Reset"
                      className="btn btn-danger w-100"
                      onClick={ResetEmployeeForm}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-8">
          <h5 className="home-heading">Employees</h5>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employeeobj) => (
                <Employee
                  key={employeeobj.id}
                  employeeInfo={employeeobj}
                  deleteEmployee={DeleteEmployee}
                  initUpdateEmployee={InitUpdateEmployee}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

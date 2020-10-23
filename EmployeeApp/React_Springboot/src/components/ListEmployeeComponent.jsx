import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }
  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }
  deleteEmployee(id) {
    // rest Api call
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  // IMportant gets the informations from the rest api
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  //
  addEmployee() {
    this.props.history.push("/add-employee/-1");
  }
  render() {
    return (
      <div>
        <h2 className="text-center"> Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            {" "}
            Add Employee
          </button>
        </div>
        <div>
          <table className="table table-striped table-nordered">
            <thead>
              <tr>
                <th> Employee First Name </th>
                <th> Employee Last Name </th>
                <th> Employee Email Id </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>

                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update Info
                    </button>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-warning"
                    >
                      View Info
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;

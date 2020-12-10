import React from "react";
import "./style.css";




const EmployeeCard = (props) =>{
    // Map over this.state.employees and render a employeeCard component for each employee object
        return (
            <div>
                {props.employees.map(employee => (

                    <div className="card">
                        <div className="img-container">
                            <img alt={employee.first} src={employee.picture.large} />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <strong>Name:</strong> {employee.name.first} {employee.name.last}
                                </li>
                                <li>
                                    <strong>Email:</strong> {employee.email}
                                </li>
                                <li>
                                    <strong>Cell Number:</strong>  {employee.cell}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        );
    
}

export default EmployeeCard;


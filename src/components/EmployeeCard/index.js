import React, { Component } from "react";
import "./style.css";
import API from "../../Utils/API";



class EmployeeCard extends Component {
    // Setting this.state.employees to the employees json array
    state = {
        result: [],
    };

    componentDidMount() {
        API.EmployeeSearch()
            .then(res => this.setState({ result: res.data.results }))
    }

    // Map over this.state.employees and render a employeeCard component for each employee object
    render() {
        return (

            <div>
                {this.state.result.map(info => (

                    <div className="card">
                        <div className="img-container">
                            <img alt={info.first} src={info.picture.large} />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <strong>Name:</strong> {info.name.first} {info.name.last}
                                </li>
                                <li>
                                    <strong>Email:</strong> {info.email}
                                </li>
                                <li>
                                    <strong>Cell Number:</strong>  {info.cell}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default EmployeeCard;


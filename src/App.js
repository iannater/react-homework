import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import API from "./Utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component{
    state = {
        result: [],
    };
    componentDidMount () {
        API.EmployeeSearch()
            .then(res => this.setState({ result: res.data.results }))
    };

    sortAZ = () => {
        const employee = this.state.result.sort((a, b) =>
          a.name.last.localeCompare(b.name.last)
        );
        this.setState({ result: employee });
      };
    
      sortZA = () => {
        const employee = this.state.result.sort((a, b) =>
          b.name.last.localeCompare(a.name.last)
        );
        this.setState({ result: employee });
      };



render(){
    return <div>
        <div className="empTitle"><h1 >Employee List</h1></div>
       <div className="mainDiv">
           <div className="divBtn">
           <button className="sortButton" onClick={this.sortAZ} >Sort A-Z</button>
           <button className="sortButton" onClick={this.sortZA}>Sort Z-A</button>
           </div>
        <EmployeeCard employees={this.state.result}/>
        </div>
       
        </div>
}}

export default App;

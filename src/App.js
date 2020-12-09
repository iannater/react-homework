import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import 'bootstrap/dist/css/bootstrap.min.css';




function App(){
    return <div>
        <div className="empTitle"><h1 >Employee List</h1></div>
       <div className="mainDiv">
           <div className="divBtn">
           <button className="sortButton" onClick={sortAZ}>Sort A-Z</button>
           <button className="sortButton" onClick={sortZA}>Sort Z-A</button>
           </div>
        <EmployeeCard />
        {console.log()}
        </div>
       
        </div>
}

export default App;

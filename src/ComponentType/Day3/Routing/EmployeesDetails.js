import React from "react";
import { useParams } from "react-router";
import EmpObj from "./empAPI";

function EmployeesDetails(){

    var params = useParams()
    console.log(params)
    var empIdSpe =parseInt(params.id);
    console.log(empIdSpe)
    var empObj = EmpObj.getEmp(empIdSpe)
    console.log(empObj)

    return(
        <> 
            <h1>EmployeesDetails </h1>
            <p>{empObj.empid}</p>
            <p>{empObj.empName}</p>
            <p>{empObj.empSalary}</p>
        </>
    )
}

export default EmployeesDetails;
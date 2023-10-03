import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import EmpList from "./empList";
import EmployeesDetails from "./EmployeesDetails";
function SimpleRouting(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to ='/employedpage'>Employed Page</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/employedpage" element={<EmpList/>}></Route>
                <Route path="/employedpage/employedpage/:id" element={<EmployeesDetails/>}></Route>
            </Routes>
        </>
    )
}

// function EmployeesDetails(){
//     return <h1>employedpage</h1>   
// }

function Home(){
    return<h1>Home</h1>
}
// function AboutUs(){
//     return<h1>Employed Page</h1>
// }
export default SimpleRouting;
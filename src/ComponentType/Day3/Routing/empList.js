import React from "react";
import { Link } from "react-router-dom";
import EmpObj from "./empAPI";
function EmpList() {
  let empList = EmpObj.getAllEmps();
  return (
    <ul>
      {/* {empList.map(emp=>{
                <li>
                    emp.empid
                </li>
            })} */}
      {/* {
                empList.map(emp=>{
                    <li>
                        <p>{emp.empid}</p>
                    </li>
                })
            } */}
      <li>Hello!</li>
      {
        empList.map(
          (listItem, key) => (
            <li>
              <Link to={`employees/${listItem.empId}`}><p key={empList.empid}>{listItem.empName}</p></Link>
            </li>
          )
          // <tr>
          //     <td>{listItem.fname}</td>
          //     <td>{listItem.lname}</td>
          //     <td><button onClick={()=>{setIsVisible(true); setSelected(listItem)}}>onClick</button></td>
          // </tr>
        )

        //42 Time
      }
    </ul>
  );
}

export default EmpList;

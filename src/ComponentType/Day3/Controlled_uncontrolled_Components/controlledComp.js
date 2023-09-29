import { useRef } from "react";
import { useState } from "react";

function ControlledComp(){
    let[formValue, setFormValue] = useState('Initial Value')
    let inputRef = useRef()
    return(
        <form>
            <label>Enter First Name:</label>
            {/* <input type="text" value="Initial Value"/> Controlledcomponent */}
            {/* Uncontrolled Component */}
            <input type="text" value={formValue} onChange={(e)=>{
                //Conditionaly we call set text
                //If data is not valid we will not call setFormValue
               setFormValue(e.target.value)
            }}/>
            {/* <button onClick={()=>setFormValue(inputRef.current.value)}>Submit</button> */}
        </form>
    )
}
export default ControlledComp;
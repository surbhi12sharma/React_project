import { useRef } from "react";
import { useState } from "react";

function Uncontrolled(){
    let[formValue, setFormValue] = useState('Initial Value')
    let inputRef = useRef()
    return(
        <form>
            <div>{formValue }</div>
            <label>Enter First Name:</label>
            <input type="text" ref={inputRef}/> 
            <button onClick={()=>setFormValue(inputRef.current.value)}>Submit</button>
        </form>
    )

}

export default Uncontrolled
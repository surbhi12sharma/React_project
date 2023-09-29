import {  useRef, useState } from "react";

function CTitle(props){
    // var[ title, setTitle ] = useState('This is component comunication')
    var titleRef = useRef();
    return(
        <>
            {/* <input type='text' ref={titleRef}/>
            <button onClick={()=>{
                var newTitle = titleRef.current.value
                props.setTitleVal(newTitle)  //Call Back Function
            }}>Change title</button> */}
            {setTimeout(()=>{
                props.setTitleVal('Child Title')
            },10000)}
        </>
    )
}

export default CTitle;
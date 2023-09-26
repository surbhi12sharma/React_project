import { useRef, useState } from "react";

function MessageComponent(props){
    // let message = 'Welcome to Persistent!!'
    var [stateChange, setStateChange] = useState('Welcome to Persistent!!')
    var [user, setUser]  = useState(props.user)
    let messageRef = useRef()
    
    function MessageChange(){
        // message = 'Nice to meet you!'
        // var message = document.getElementById('text1').value
        // setStateChange(message)

        //Accessing value from ref
        // messageRef.current.value
        setStateChange(messageRef.current.value)
    }

    return(
        <div>
            <h1>{stateChange}</h1>
            {/* <input type = "text" id='text1'></input> */}
            <input type = "text" ref = {messageRef}></input>
            <button onClick={MessageChange}>On Change</button>
            <h1>Emp id : {user.empid}</h1>
            <h2>Emp name: {user.empName}</h2>
        </div>
    )
}
export default MessageComponent;
import { useState } from "react";

function MessageComponent(){
    // let message = 'Welcome to Persistent!!'
    var [stateChange, setStateChange] = useState('Welcome to Persistent!!')
    function MessageChange(){
        // message = 'Nice to meet you!'
        setStateChange('Nice to meet you!')
    }

    return(
        <div>
            <h1>{stateChange}</h1>
            <button onClick={()=>setStateChange('Nice to meet you!')}>On Change</button>
        </div>
    )
}
export default MessageComponent;
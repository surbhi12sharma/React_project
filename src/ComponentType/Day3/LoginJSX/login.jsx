import { useRef } from "react";

function LoginJsx(){
    let userNameRef = useRef('')
    let passwordRef = useRef('')
    return(
        <>
            <h1>Welcome</h1>
            <div> 
                <label>User Name:-  </label>
                <input type='email' ref={userNameRef}></input>
            </div>
            <div> 
                <label>Password:-  </label>
                <input type='password' ref={passwordRef}></input>
            </div>
            <button onClick={()=>passwordRef.current.value && userNameRef.current.value ? alert('Login Succefull') : alert('Please try again')}>Login</button>
        </>
    )
}

export default LoginJsx;
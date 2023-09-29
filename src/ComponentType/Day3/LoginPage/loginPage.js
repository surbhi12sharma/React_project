import { useRef } from 'react';
import PageHeader from './Header'


function LoginPage(props){
    let userNameRef = useRef('')
    let passwordRef = useRef('')
    return(
        <>
            <div>
                <label>User Name:</label>
                <input type="email" ref={userNameRef}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" ref ={passwordRef}/>
            </div>
            <br/>
            <button onClick={()=>{userNameRef.current.value!=='' && passwordRef.current.value!=='' ? props.setUserName(userNameRef.current.value) : alert("Password or username missing")}}>Login </button>
        </>
    )
}

export default LoginPage; 
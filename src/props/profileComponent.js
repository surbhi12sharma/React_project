import ChildCom from "../Day2/child";

function Profile(props){
    return( <div>
        <ChildCom userName= {props.userName}/>
        <h3>name = {props.userName} && id = {props.userId}</h3>
    </div>)
} 
export default Profile;
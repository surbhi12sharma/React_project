import ChildCom from "../Day2/props/child";
import UserObjCom from "../Day2/props/userObjCom";

function Profile(props){
    let user = {userName: 'soumya', userId:102}
    return( <div>
        <ChildCom userName= {props.userName}/>
        <UserObjCom user = {user} />
        <h3>name = {props.userName} && id = {props.userId}</h3>
    </div>)
} 
export default Profile;
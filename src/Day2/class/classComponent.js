import React, {Component} from "react";

class ClassComponent extends Component{
    render(){
        return(
            <>
                <h1>Class Props</h1>
                <p>{this.props.userName}</p>
                <p>{this.props.userId}</p>
            </>
        )
    }
}

export default ClassComponent
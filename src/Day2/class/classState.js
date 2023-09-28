import React, {Component, createRef} from "react";

class ClassState extends Component{
    
    //In Javascript all class member will be defined inside constructor
    constructor(){
        console.log("1st Constructor is called")
        super() //Call Parent constructor
        this.state = {
            message : 'Welcome',
            name : 'Surbhi'
        }

        this.inputRef = createRef();
    }

    messageChange(){
        this.setState({message: this.inputRef.current.value})
    }

    //Arrow function
    // messageChange = () => {
    //     console.log('Change Message...')
    //     this.setState({message: "Welcome Home"})
    // }
    render(){
        console.log("2nd Render is called")
        return(
            <>
                <h1>{this.state.message}</h1>
                <input type='text' ref={this.inputRef}/>
                {/* <button onClick={this.messageChange}>On Change Class State</button> */}
                <button onClick={this.messageChange.bind(this)} >On Change Class State</button>
            </>
        )
    }

    componentDidMount(){
        console.log('Called on at initial render, component did mount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps, nextState)
        return true
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component Did Update')
        console.log(prevProps, prevState)
    }
}

export default ClassState
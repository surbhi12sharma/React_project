import React from 'react'

export function Functiontype(){
    var name = 'Persistent!!' 
    return(
        <div>
            <h1>Function Component Type!</h1>
        <h1>Interpolation Syntax  {name}</h1>
        </div>
    )
}


export default class Classtype extends React.Component{
    render(){
        return(
            <h1>Class Component</h1>
        )
    }
}
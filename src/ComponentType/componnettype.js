import React from 'react'
import '../stylingComponent/mycss.css'
export function Functiontype(){
    let name = 'Persistent!!' 
    return(
        <div>
            <h1 id='p1'>Function Component Type!</h1>
        <h1 className='inter'>Interpolation Syntax  {name}</h1>
        </div>
    )
}


export default class Classtype extends React.Component{
    render(){
        return(
            <h2>Class Component</h2>
        )
    }
}
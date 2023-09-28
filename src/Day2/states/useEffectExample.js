import { useEffect, useRef, useState } from "react";

function UseEffectExample(){
    let [message, setMessage] = useState('Welcome to useEffect Example')
    let messvalue = useRef()
    // let isInitialRender = true; //On state change component is re-render so isInitialRender
    //getting re-initialized to true again . so we need to use useRef.
    let isInitialRender = useRef(true)
    console.log('component render')

    useEffect(()=>{
        console.log('api Call')
    }) //It will be called at initial render

    useEffect(()=>{
        if(isInitialRender.current){
            console.log('Initial Render...')
            isInitialRender.current = false
        }
        else{
            console.log('Message Change')
        }
    },[message]) // It will be called when message change! as well as initial render 


    useEffect(()=>{
        let t = setTimeout(()=>{console.log('In setTimeout')},10)

        return()=>{
            // console('In return statmen/t')
            clearTimeout(t)
        }
    },[])

    return(
        <>
            <h1>{message}</h1>
            <input type='text' ref={messvalue}></input>
            <button onClick={()=>{
                setMessage(messvalue.current.value)
            }}>Use Effect</button>
        </>
        
    )
}

export default UseEffectExample;
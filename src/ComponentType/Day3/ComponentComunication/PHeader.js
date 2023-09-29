import {  useState } from "react";
import CTitle from "./CTitle";

function PHeader(){
    var[title, setTitle] = useState('This is component comunication')
    return(
        <>

        {/* Passing as a prop */}
        <h1>{title}</h1>
        <CTitle title={title} setTitleVal={setTitle}/>
        </>
    )
}

export default PHeader;
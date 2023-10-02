import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

function SimpleRouting(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to ='/aboutus'>About Us</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/aboutus" element={<AboutUs/>}></Route>
            </Routes>
        </>
    )
}

function Home(){
    return<h1>Home</h1>
}
function AboutUs(){
    return<h1>About Us</h1>
}
export default SimpleRouting;
import React, { useState } from "react";

function ProductDetails(props){
    return(
        <>
            <h1>Product Details</h1>
            <div>Fname: {props.selected.fname}</div>
            <div>Lname: {props.selected.lname}</div>
        </>
    )
}

export default ProductDetails;
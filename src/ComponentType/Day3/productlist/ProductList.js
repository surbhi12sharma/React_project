import React, { useState } from "react";

import ProductDetails from './productDetailPage.js'

function ProductList(){

    var list  = [{fname:'anshu', lname:'Sharma'},
                {fname:'Bittu', lname:'Sharma'} ]
    var [isVisible, setIsVisible] = useState(false)
    let [selected, setSelected] = useState()

    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>Fname</td>
                    <td>Lname</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((listItem)=>
                        <tr>
                            <td>{listItem.fname}</td>
                            <td>{listItem.lname}</td>
                            <td><button onClick={()=>{setIsVisible(true); setSelected(listItem)}}>onClick</button></td>
                        </tr>)

                        //42 Time
                }
            </tbody>
        </table>

        { isVisible && <ProductDetails selected={selected} />}
        </>
    )
}

export default ProductList
import React from "react";
import {NavLink} from "react-router-dom"
const Navbar=()=>{
    return(
    <>
    <nav>
     
        <NavLink to={"/"}>Home</NavLink>
        <br/>
        <NavLink to={"/About"}>About</NavLink>
        <br/>
        <NavLink to={"/Skills"}>Skills</NavLink>
     </nav>

    </>
    );
}
export default Navbar;
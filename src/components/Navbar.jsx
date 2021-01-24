import React from "react";
import styled from "styled-components";

const NavBar = () =>{
    const Bar = styled.div`
   
    background-color:gray;
    `
    return(
        <Bar>
        <nav className="navbar navbar-dark bg-dark text-white">
        <a className="navbar-brand" href="#">VIVID VIBES</a>
            </nav>
        </Bar>
    )

}
export default NavBar;
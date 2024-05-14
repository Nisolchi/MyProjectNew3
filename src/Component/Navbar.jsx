import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
<>
<NavContainer>
    <h2>BodyDesigners<span>Responsive</span></h2>
    <div>
        <a href="/">Home</a>
        <a href="/WorkoutPage">Workout</a>
        <a href="/FormPage">Create workout</a>
        <a href="/AboutmePage">About Me</a>
    </div>
</NavContainer>

</>
 
)
}
export default Navbar;

const NavContainer = styled.nav`
h2{
    font-weight: 400:
    span{
        font-wight: bold;
    }
}
paddiing: 4rem:
background-color: #333;
display: flex;
aling-items: center;
justify-content: space-between;
a{
    color: whithe;
    margin-right:1rem;
}
`
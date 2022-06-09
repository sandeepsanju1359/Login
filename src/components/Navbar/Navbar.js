import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
        <>
        <div className="navbar_container">
           Login Page
           
        </div>
        <div className="login_container">
            <p className="p1">
                Sign In
            </p>
        <p>Don't have an account ? <span className="highlighted">Get Started</span></p>
        <form>
        <div className="email">
            <input type="email" name="Email" placeholder="Email" required></input>
        </div>
        <div className="pass">
            <input  type="password" name="Password" placeholder="Password" required></input>
        </div>
        </form>
        <button className="button">Submit</button>
        </div>
        </>
    )
}

export default Navbar;
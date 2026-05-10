import { useState } from "react";
import { NavLink} from "react-router-dom";
import "../components/Navbar.css"

function Navbar() {
    return (
        <>
            <nav>
                  <div>< NavLink to="/">LOGO</ NavLink></div>
                  <div className="navlinks">
                < NavLink to="/">Home</ NavLink> 
                < NavLink to="/about">About</ NavLink> 
                < NavLink to="/contact">Contact</ NavLink>
                </div>

                <div>
                    <button>< NavLink to="/">LOGIN</ NavLink> </button>
                    <button>< NavLink to="/">REGISTER</ NavLink></button>
                </div>
                <div>&#9776;</div>
            </nav>

        </>
    )
}

export default Navbar
import React from "react";
import {NavLink} from "react-router-dom";
function NavBar() {
  return (
    <header>
        <div>
            <nav>
                <NavLink to="/" exact>Troy</NavLink>
                <NavLink to ="/post">Blog Posts</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About Me!</NavLink>
            </nav>
        </div>
    </header>

  )
}

export default NavBar;

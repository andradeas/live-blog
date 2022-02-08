import React from "react";
import {Link} from "react-router-dom";

import "./styles.css";

export default function NavBar(){
  return (
    <nav className="navbar">
      <div>
        <Link className="logo" to="/"><h3>Meu Blog</h3></Link>
      </div>
      <div>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/post">Sobre</Link>
        <Link className="nav-link" to="/contact">Contato</Link>
        <Link className="nav-link" to="/culture">Cultura</Link>
      </div>
    </nav>
  )
}
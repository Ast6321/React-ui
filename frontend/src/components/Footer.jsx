import { useState } from "react";
import {Link} from 'react-router-dom'
import "../components/Footer.css"

function Footer(){
    return(
        <>
        <footer>
      <div>
        <h3>Address</h3>
        <p>
          123, My Street <br />
          Gurgaon, Haryana <br />
          India
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h3>Follow Us</h3>
        <div>
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">📘</a>
          <a href="#">📸</a>
        </div>
      </div>
    </footer>
        
        </>
    )
}

export default Footer
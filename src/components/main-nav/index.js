import React from 'react'
import { Link } from 'react-router'
import './main-nav.css'

let MainNav = () => (
    <ul className="Main-Nav">
        <li className="Main-Nav-Bar">
            <Link className="Main-Nav-Link" to="/home" activeClassName="active">Home</Link>
        </li>
        <li className="Main-Nav-Bar">
            <Link className="Main-Nav-Link" to="/about" activeClassName="active">About</Link>
        </li>
    </ul>
);

export default MainNav

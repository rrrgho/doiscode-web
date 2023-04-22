import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><a href="/">Home</a></li>
            <li><a href="/#about-us">About Us</a></li>
            <li><a href="/#contact-us">Contact Us</a></li>

            {/*<li><a href="/#pricing">Pricing</a></li>*/}
        </ul>
    )
}
export default Nav;

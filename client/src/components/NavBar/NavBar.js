import React from 'react';
import './NavBar.css';

function NavBar(props) {
    let img = props.img;
    return (
    
        <div>
	        <div className="navHeader">
                <a href="/"><img className ="photo" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="xK1HvZ.png" border="0" width="auto" height="32" /></a>
            <a href="/admin"><div id= "search"><p><i  className="fas fa-search" id="search"/></p></div></a>
            <a href="/login"><div id= "search"><p><i className="fas fa-user" id="search"/></p></div></a>
	        </div>
        </div>   

        
    );
}
export default NavBar;

import React from 'react';
import './NavBar.css';

function NavBar(props) {
    let img = props.img;
    return (
    
        <div>
	        <div class="header">
            <img class ="photo" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="xK1HvZ.png" border="0" width="auto" height="32" />
            {/* <div class = "search"><p><i class="fas fa-search" id="search"/></p></div> */}
	        </div>
        </div>   

        
    );
}
export default NavBar;

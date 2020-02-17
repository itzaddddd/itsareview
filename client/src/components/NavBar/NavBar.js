import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component  {

    constructor(props){
        super(props);
    }

    render() {
        
        let img = this.props.img;
        return (
        
            <div>
                <div className="navHeader">
                <img className ="photo" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="xK1HvZ.png" border="0" width="auto" height="32" />
                {/* <div class = "search"><p><i class="fas fa-search" id="search"/></p></div> */}
                </div>
            </div>   

            
        );
    }
    
    
}
export default NavBar;

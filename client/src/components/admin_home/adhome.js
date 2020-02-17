import React , {Component} from 'react';
import 'D:/se/itsareview/client/src/components/admin_navbar/navbar.css';
import Navbar from "D:/SE/itsareview/client/src/components/admin_navbar/navbar.js";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{textAlign:'center', marginTop:'13em'}}>
                    <p className="admin_welcome">ยินดีต้อนรับเข้าสู่ระบบจัดการ</p>
                    <img className="mascot" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="Logo " border="0"/>
                </div>
            </div>
            
        )
    }
}

export default Home;
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


class Nav extends Component {    

    render() {

        return(
            <div className="main-navigation">
                <nav className="adNav">
                    <ul className="container1">
                        <li><img className='Logo' src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="Logo " border="0"/></li>
                        <li><Link className="ad" to="/admin">หน้าหลัก <i className="fas fa-home"></i></Link></li>                        
                        <li><Link className="ad" to="/admin/users">ข้อมูลผู้ใช้งาน <i className="fas fa-users"></i></Link></li>
                        <li><Link className="ad" to="/admin/reviews">ข้อมูลรีวิว <i className="fas fa-edit"></i></Link></li>
                        <li><Link className="ad" to="/admin/boards">ข้อมูลกระทู้ <i className="fas fa-comments"></i></Link></li>
                        <li><Link className="ad" to="/admin/categories">จัดการหมวดหมู่ <i className="fas fa-clipboard-list"></i></Link></li>
                        <li><Link className="ad" to="/admin/banners">จัดการโฆษณา <i className="fas fa-bullhorn"></i></Link></li>
                    </ul>
                    <ul className="container2">
                        <li>Admin <i className="fas fa-user"></i></li>
                        <li><Link className="ad" to="/">ออกจากระบบ <i className="fas fa-sign-out-alt"></i></Link></li>
                    </ul>

                </nav>
            </div> 
    )

    }
}

export default Nav;



{/* <li><a className="ad" href="/admin">หน้าหลัก <i className="fas fa-home"></i></a></li>
<li><Link className="ad" to="/admin">หน้าหลัก <i className="fas fa-home"></i></Link></li>

<li><a className="ad" href="/admin/user">ข้อมูลผู้ใช้งาน <i className="fas fa-users"></i></a></li>
<li><a className="ad" href="/admin/review">ข้อมูลรีวิว <i className="fas fa-edit"></i></a></li>
<li><a className="ad" href="/admin/board">ข้อมูลกระทู้ <i className="fas fa-comments"></i></a></li>
<li><a className="ad" href="/admin/category">จัดการหมวดหมู่ <i className="fas fa-clipboard-list"></i></a></li>
<li><a className="ad" href="/admin/banner">จัดการโฆษณา <i className="fas fa-bullhorn"></i></a></li> */}
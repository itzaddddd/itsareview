import React , {Component} from 'react';

import './navbar.css';


class Nav extends Component {    

    render() {

        return(
            <div class="main-navigation">
                <nav className="adNav">
                    <ul className="container1">
                        <li><img className='Logo' src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="Logo " border="0"/></li>
                        <li><a className="ad" href="/admin">หน้าหลัก <i class="fas fa-home"></i></a></li>
                        <li><a className="ad" href="/admin/user">ข้อมูลผู้ใช้งาน <i class="fas fa-users"></i></a></li>
                        <li><a className="ad" href="/admin/review">ข้อมูลรีวิว <i class="fas fa-edit"></i></a></li>
                        <li><a className="ad" href="/admin/board">ข้อมูลกระทู้ <i class="fas fa-comments"></i></a></li>
                        <li><a className="ad" href="/admin/category">จัดการหมวดหมู่ <i class="fas fa-clipboard-list"></i></a></li>
                        <li><a className="ad" href="/admin/banner">จัดการโฆษณา <i class="fas fa-bullhorn"></i></a></li>
                    </ul>
                    <ul className="container2">
                        <li>Admin <i class="fas fa-user"></i></li>
                        <li><a className="ad" href="#">ออกจากระบบ <i class="fas fa-sign-out-alt"></i></a></li>
                    </ul>

                </nav>
            </div> 
    )

    }
}

export default Nav;
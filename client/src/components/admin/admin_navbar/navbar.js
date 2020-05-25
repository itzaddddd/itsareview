import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Logout from '../../Auth/Logout/logout'
import './navbar.css';

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

class Nav extends Component {    

    static propsTypes = {
        user: PropTypes.object.isRequired
    }

    render() {
        const { user } = this.props.user
        return(
            <div className="main-navigation">
                <nav className="adNav">
                    <ul className="container1">
                        <li><Link className="ad" to="/admin"><img className='admin-logo' src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="Logo " border="0"/></Link></li>
                        {/* <li>หน้าหลัก <i className="fas fa-home"></i></li>                         */}
                        <li><Link className="ad" to="/admin/users">ข้อมูลผู้ใช้งาน <i className="fas fa-users"></i></Link></li>
                        <li><Link className="ad" to="/admin/reviews">ข้อมูลรีวิว <i className="fas fa-edit"></i></Link></li>
                        {/* <li><Link className="ad" to="/admin/boards">ข้อมูลกระทู้ <i className="fas fa-comments"></i></Link></li> */}
                        <li><Link className="ad" to="/admin/categories">จัดการหมวดหมู่ <i className="fas fa-clipboard-list"></i></Link></li>
                        {/* <li><Link className="ad" to="/admin/banners">จัดการโฆษณา <i className="fas fa-bullhorn"></i></Link></li> */}
                        <li><Link className="ad" to="/">กลับสู่อิสรีวิว</Link></li>
                    </ul>
                    <ul className="container1 right">
                        
                        <li>
                            <Link to={`/user/${user ? user._id:null}`} id="username" className="ad">
                                <strong>{ user ? user.userName : 'ชื่อสมาชิก'}</strong>
                            </Link>
                        </li>
                        <li>
                            <Logout />
                        </li>
                        <li>
                            <a href="/search" className="search"><span className="search"><i className="fas fa-search"></i><p className="searchNiyay">ค้นหารีวิว</p></span></a>
                        </li>
                    </ul>

                </nav>
            </div> 
    )

    }
}

export default connect(mapStateToProps,null)(Nav);

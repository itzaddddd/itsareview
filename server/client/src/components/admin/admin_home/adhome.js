import React , {Component} from 'react';
import '../admin_navbar/navbar.css';
import Navbar from "../admin_navbar/navbar";
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
class Home extends Component {
    /* redirect to home if not admin */
    componentWillReceiveProps(nextProps){
        if((nextProps.user !== this.props.user) && nextProps.user.user){
            if(!nextProps.user.user.isAdmin){
                this.props.history.push('/')
            }
        }
    }
    render() {
        if(this.props.user.user){
            return (
                <div>
                    <Navbar/>
                    <div style={{textAlign:'center', marginTop:'13em'}}>
                        <p className="admin_welcome">ยินดีต้อนรับเข้าสู่ระบบจัดการ</p>
                        <img className="mascot" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="Logo " border="0"/>
                    </div>
                </div>
                
            )
        }else{
            return ''
        }
    }
}

export default connect(mapStateToProps,null)(Home);
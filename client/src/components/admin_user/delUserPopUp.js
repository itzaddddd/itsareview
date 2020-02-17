import React , {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import './aduser.css';



export class PopUpDelUser extends Component {

    constructor(props) {
      super(props);
    }

    render() {

      return (
        <div>
          <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Body style={{height:"10em", textAlign:"center"}}>
                <p className="message">ต้องการลบผู้ใช้งาน xxxx ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.onHide}>ยกเลิก</Button>
                <Button className='success'>ยืนยัน</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
}
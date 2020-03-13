import React , {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './adreview.css';



export class PopUpDelReview extends Component {

    constructor(props) {
      super(props);
    }
 
    render() {
      
      return (
        <div>
          <Modal animation={false}
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Body style={{height:"15em", textAlign:"center"}}>
                <p className="message">ต้องการลบรีวิว xxxxx ?</p>
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


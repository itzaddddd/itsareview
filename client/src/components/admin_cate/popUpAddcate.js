import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import './popUpAddcate.css';
 


export class PopUp extends Component {

    constructor(props) {
        super(props);
    }


    state =  {
        selectedFile: null,
        imagePreviewUrl: null
      };
     
      fileChangedHandler = event => {
        this.setState({
          selectedFile: event.target.files[0]
        })
     
        let reader = new FileReader();
         
        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(event.target.files[0])
     
      }

        
    render() {

        let $imagePreview = (<div className="previewText image-container"></div>);
            if (this.state.imagePreviewUrl) {
                $imagePreview = (<div className="image-container" style={{textAlign: 'center'}} >
                    <img className="iconCate" src={this.state.imagePreviewUrl} alt="icon"  /> 
                    </div>);
                }

        return (
            
            <div>

                <Modal animation={false}
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        <p className="popUpTopic"><i class='fas fa-plus-circle' style={{color:'Black'}}/>  เพิ่มหมวดหมู่</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="inputName">ชื่อหมวดหมู่</p>
                        <input Name='categoryName' type='text' placeholder='ชื่อหมวดหมู่' style={{marginBottom:'10px', marginTop:'5px'}}/>
                        <p className="inputName">เพิ่มไอคอน</p>
                        <div style={{width:'18em'}}>
                            <input className='inputIcon' type="file" accept="image/*" alt="Submit" onChange={this.fileChangedHandler} style={{marginLeft:'10px'}}/>
                            { $imagePreview }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modalBtn" variant="secondary" onClick={this.props.onHide}>ยกเลิก</Button>
                        <Button className='modalBtn success'>ยืนยัน</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
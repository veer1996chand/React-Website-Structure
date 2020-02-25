import React, { useState, setShow } from "react"
import Modal from 'react-bootstrap/Modal' 
const ThankYou = (props) => {
    const [show, setShow] = useState(props.toggle);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <> 

            <Modal show={show} onHide={handleClose}>

               
                    <div className="modal-content">
                        <button variant="secondary" onClick={handleClose} type="button" className="close mt-2 mr-2 d-flex align-self-end">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body p-5">
                            <h5 className="text-danger">{props.title}</h5>
                            <p>{props.content}</p>
                        </div> 
                    </div>
                
            </Modal>
        </>
    );
}
export default ThankYou;
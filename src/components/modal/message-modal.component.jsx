import React from 'react';
import Modal from 'react-modal';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';

import './modal.styles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Modal, Button } from 'react-bootstrap';

class MessageModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser
        }


    // let name = JSON.stringify(currentUser);
    // let displayName = "";
    console.log(this.props.currentUser);

/*      const getJSON = (name, (data) => {
       const displayName = data.displayName;
 */
    }

    handleClick = () => {
        this.hide();
    }

    render() {
      
    return(
        <div className = 'modal-container'>
            <div className = 'modal-background'></div>

            <div className = 'message-modal'>
                <div className = 'modal-conent'>
                    <div className = "modal-header">
                    <h1>D.W. FAZHIONZ</h1>
                    </div>
                    
                    <p>Welcome {`${this.props.currentUser}`}</p>
                </div>

                <div className = "button">
                    <CustomButton type = "button" onClick = { this.handleClick }>OK</CustomButton>
                </div>

            </div>

            
        </div>
    );

}
}



export default MessageModal;
import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SigninContainer from './session/signin_container';
import SignupContainer from './session/signup_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'signin':
            component = <div className='modal-form'><SigninContainer /></div>;
            break;
        case 'signup':
            component = <div className='modal-form'><SignupContainer /></div>;;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div onClick={closeModal()}>{}</div> 
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
    children?: any;
    id?: string;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};
const Modal = ({
    children,
    id,
    showModal,
    setShowModal,
}: ModalProps) => {
    return (
        <div className='modal' id={id ? `product-id-${id}` : ''} data-modal-status={showModal}>
            <button onClick={() => setShowModal(false)}>Close</button>
            <div className='modal__content'>
                { children }
            </div>
            <div className='modal__overlay' onClick={() => setShowModal(false)} />
        </div>
    );

}

export default Modal;

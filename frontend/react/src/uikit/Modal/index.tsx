import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
    children?: any;
    id?: string;
    prefix?: string;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

const Modal = ({
    children,
    id,
    prefix = 'modal',
    showModal,
    setShowModal,
}: ModalProps) => {
    if (!showModal) {
        return null;
    }

    const Component = () =>
        <div className={prefix} id={id ? id : ''} data-modal-status={showModal}>
            <div className={`${prefix}__content`}>
                <button className={`${prefix}__close`} onClick={() => setShowModal(false)}>
                    <FontAwesomeIcon icon={["fas", "times"]} />
                    <span className='visually-hidden'>Close</span>
                </button>
                { children }
            </div>
            <div className={`${prefix}__overlay`} onClick={() => setShowModal(false)} />
        </div>


    return ReactDOM.createPortal(
        <Component />,
        document.body
    );
}

export default Modal;

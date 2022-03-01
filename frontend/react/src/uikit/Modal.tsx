import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';

interface ModalProps {
    children?: any;
    className?: string;
    id?: string;
    prefix?: string;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
    ({
        children,
        className,
        id,
        prefix = 'modal',
        showModal,
        setShowModal,
    }, ref) => {
        if (!showModal) {
            return null;
        }

        const Component = () =>
            <div
                ref={ref}
                className={classNames(prefix, className)}
                id={id ? id : ''}
                data-modal-status={showModal}>
                <div className={`${prefix}__content`}>
                    <button className={`${prefix}__close`} onClick={() => setShowModal(false)}>
                        <CloseIcon />
                        <span className='visually-hidden'>Close</span>
                    </button>
                    { children }
                </div>
                <div className={`${prefix}__overlay`} onClick={() => setShowModal(false)} />
            </div>

        // Render modal as a portal
        return ReactDOM.createPortal(
            <Component />,
            document.body
        );
    }
);

Modal.displayName = 'Modal';

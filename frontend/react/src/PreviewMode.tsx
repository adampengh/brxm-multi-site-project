import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

import './PreviewMode.scss';

const PreviewModal = () => {
    const history = useHistory();
    const cookies = new Cookies();

    const exitPreviewMode = () => {
        cookies.remove('previewMode', { path: '/' });
        history.push(window.location.pathname);
    }

    return ReactDOM.createPortal(
        <div className="preview-mode">
            <p>You are currently viewing the site in Preview Mode</p>
            <button onClick={() => exitPreviewMode()}>Exit Preview Mode</button>
        </div>
    , document.body);
}

export default PreviewModal;

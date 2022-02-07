import React from 'react';
import { Link } from 'react-router-dom';

import './QuickView.scss'

const QuickView = ({ item }: any) => {
    if (!item) {
        return null;
    }
    return (
        <div className='quick-view'>
            <div className='quick-view__left'>
                <img src={item?.imageSet?.original?.link?.href} alt='Product' />
            </div>
            <div className='quick-view__right'>
                <h1>{ item?.displayName }</h1>
                <Link to={`/p/${item?.itemId?.id}`}>View Details</Link>
            </div>

        </div>
    )
}

export default QuickView;

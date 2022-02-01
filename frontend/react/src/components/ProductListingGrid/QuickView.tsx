import React from 'react';

import './QuickView.scss';

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
            </div>

        </div>
    )
}

export default QuickView;

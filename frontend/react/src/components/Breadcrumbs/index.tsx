// import { useCategory } from '@bloomreach/connector-components-react';
import React from 'react';

import './Breadcrumbs.scss';

const CategoryBreadcrumb = ({ text }: any) => {
    if (!text) {
        return null;
    }

    return (
        <>
            <section className='breadcrumbs'>
                <a className='breadcrumbs__item' href='/'>Home</a>
                <span>&nbsp;/&nbsp;</span>
                <span className='breadcrumbs__item'>{ text }</span>
            </section>
        </>

    );
}

export { CategoryBreadcrumb };

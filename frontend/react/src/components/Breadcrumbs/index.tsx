import { useCategory } from '@bloomreach/connector-components-react';
import React from 'react';

import './Breadcrumbs.scss';

const CategoryBreadcrumb = ({ text }: any) => {
    console.groupCollapsed('CategoryBreadcrumb');
    console.log('text', text);

    if (!text) {
        return null;
    }

    console.groupEnd();
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

// import { useCategory } from '@bloomreach/connector-components-react';
import { BrProps } from '@bloomreach/react-sdk';
import React from 'react';

import './Breadcrumbs.scss';

const BreadcrumbItem = ({ breadcrumb, separator }: any) => {
    console.log('breadcrumb', breadcrumb);
    console.log('separator', separator);
    return (
        <>
            <span>
                &nbsp;
                <span dangerouslySetInnerHTML={{ __html: separator }} />
                &nbsp;
            </span>

            <a href={breadcrumb?.link?.href} className='breadcrumbs__item'>{ breadcrumb.title }</a>
        </>
    )
}

export const Breadcrumbs = ({ component, page }: BrProps) => {
    console.log('component', component.getModels())
    const { breadcrumb: breadcrumbs } = component.getModels()
    console.log('breadcrumbs', breadcrumbs)
    return (
        <section className='breadcrumbs'>
            <a className='breadcrumbs__item' href='/'>Home</a>
            { breadcrumbs.items && breadcrumbs.items.map((breadcrumb: any, index: number) =>
                <BreadcrumbItem
                    key={index}
                    breadcrumb={breadcrumb}
                    separator={breadcrumbs.separator}
                />
            )}
        </section>
    )
}

const CategoryBreadcrumb = ({ text }: any) => {
    if (!text) {
        return null;
    }

    return (
        <section className='breadcrumbs'>
            <a className='breadcrumbs__item' href='/'>Home</a>
            <span>&nbsp;/&nbsp;</span>
            <span className='breadcrumbs__item'>{ text }</span>
        </section>
    );
}

export { CategoryBreadcrumb };

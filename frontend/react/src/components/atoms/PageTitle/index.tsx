import React, { HTMLAttributes, FC } from 'react';

import './PageTitle.scss';

interface PageTitleProps extends HTMLAttributes<HTMLOrSVGElement> {
    alignment?: string;
    as?: keyof JSX.IntrinsicElements;
}

const PageTitle: FC<PageTitleProps> = ({ alignment, as: Tag = 'h1', ...props }) => {
    return (
        <Tag
            className='page-title'
            {...props}
        />
    );
};

export default PageTitle;

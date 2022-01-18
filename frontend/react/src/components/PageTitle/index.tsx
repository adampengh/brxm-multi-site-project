import React, { ElementType, HTMLAttributes, FC } from 'react';

import './PageTitle.scss';

interface PageTitleProps extends HTMLAttributes<HTMLOrSVGElement> {
    alignment?: string;
    as?: ElementType;
}

const PageTitle: FC<PageTitleProps> = ({ alignment, as: Tag = 'h1', ...props }) => {
    return (
        <Tag
            className='page-title'
            style={{ textAlign: alignment }}
            {...props}
        />
    );
};

export default PageTitle;

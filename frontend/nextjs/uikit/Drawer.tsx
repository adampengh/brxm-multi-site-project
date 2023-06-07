import React, { useState } from 'react';
import classNames from 'classnames';

interface DrawerProps {
    className?: string;
    prefix?: string;
    side?: string;
    tabTextClosed?: string;
    tabTextOpen?: string;
}

export const Drawer = ({
    className,
    prefix = 'drawer',
    side = 'bottom',
    tabTextClosed = 'Show',
    tabTextOpen = 'Hide',
}: DrawerProps) => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <section
            className={classNames(prefix, className)}
            role='dialog'
            tabIndex={-1}
            data-drawer-side={side}
            data-drawer-status={showDrawer}
        >
            <div
                className={`${prefix}__inner`}
                data-drawer-status={showDrawer}
            >
                {/* Header */}
                <div
                    className={`${prefix}__header`}
                    tabIndex={1}
                    onClick={() => setShowDrawer(!showDrawer)}
                    onKeyDown={(event) => event.key === 'Enter' ? setShowDrawer(!showDrawer) : false}
                >
                    <div className={`${prefix}__header-text`}>
                        <h3>{ showDrawer ? tabTextOpen : tabTextClosed }</h3>
                    </div>
                    <div className={`${prefix}__header-arrow`}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.545 31L36 29.4475L24 16.6L12 29.4475L13.4475 31L24 19.7125L34.545 31Z" fill="#43494F"/>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className={`${prefix}__content`} tabIndex={0}>
                    Content
                </div>
            </div>

            {/* Overlay */}
            <div className={`${prefix}__overlay`} onClick={() => setShowDrawer(false)} />
        </section>
    );
}

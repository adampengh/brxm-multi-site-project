import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DrawerProps {
    className?: string;
    prefix?: string;
    side?: string;
    tabTextClosed?: string;
    tabTextOpen?: string;
}

const Drawer = ({
    className,
    prefix = 'drawer',
    side = 'bottom',
    tabTextClosed = 'Show',
    tabTextOpen = 'Hide',
}: DrawerProps) => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <section
            className={`${prefix} ${className ? className : ''}`}
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
                        <FontAwesomeIcon icon={["fas", "angle-up"]} size="lg" />
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

export default Drawer;

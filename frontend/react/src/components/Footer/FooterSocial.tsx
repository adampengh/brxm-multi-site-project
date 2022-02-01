/*
 * Copyright 2019-2020 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Menu as BrMenu, TYPE_LINK_EXTERNAL, isMenu } from '@bloomreach/spa-sdk';
import { BrComponentContext, BrManageMenuButton, BrPageContext } from '@bloomreach/react-sdk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FooterSocialLinkProps {
    item: MenuItem;
}

const FooterSocial = () => {
    const component = React.useContext(BrComponentContext);
    const page = React.useContext(BrPageContext);
    const menuRef = component?.getModels<MenuModels>()?.menu;
    const menu = menuRef && page?.getContent<BrMenu>(menuRef);

    if (!isMenu(menu)) {
        return null;
     }

    return (
        <ul className='footer__social'>
            <BrManageMenuButton menu={menu} />
            { menu.getItems().map((item: MenuItem, index: number) =>
                <li key={index} className='footer__social-item'>
                    <FooterSocialLink item={item} />
                </li>
            )}
        </ul>
    );
}


const FooterSocialLink = ({ item }: FooterSocialLinkProps) => {
    const url = item.getUrl();
    const parameters: any = item.getParameters();
    const icon = parameters?.icon;

    if (!url) {
        return <span className='footer__social-link'>
            <span className='visually-hidden'>{ item.getName() }</span>
            { icon && <FontAwesomeIcon icon={["fab", icon]} /> }
        </span>;
    }

    if (item.getLink()?.type === TYPE_LINK_EXTERNAL) {
        return (
            <a className='footer__social-link' href={url} target='_blank' rel='noopener noreferrer'>
                <span className='visually-hidden'>{ item.getName() }</span>
                { icon && <FontAwesomeIcon icon={["fab", icon]} /> }
            </a>
        );
    }

    return (
        <Link to={url} className='footer__social-link'>
            <span className='visually-hidden'>{ item.getName() }</span>
            { icon && <FontAwesomeIcon icon={["fab", icon]} /> }
        </Link>
    );
}

export default FooterSocial;

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

interface FooterMenuLinkProps {
    item: MenuItem;
}

const FooterMenu = () => {
    const component = React.useContext(BrComponentContext);
    const page = React.useContext(BrPageContext);
    const menuRef = component?.getModels<MenuModels>()?.menu;
    const menu = menuRef && page?.getContent<BrMenu>(menuRef);

    if (!isMenu(menu)) {
        return null;
     }

    return (
        <div className='footer__menu'>
            <BrManageMenuButton menu={menu} />
            <ul className='footer__menu-list'>
                { menu.getItems().map((item: MenuItem, index: number) => (
                    <li key={index} className='footer__menu-list-item'>
                        <h2>{ item.getName() }</h2>

                        { item.getChildren().length &&
                            <ul>
                                { item.getChildren().map((item: MenuItem, index: number) => (
                                    <li key={index}>
                                        <FooterMenuLink item={item} />
                                    </li>
                                ))}
                            </ul>
                        }
                    </li>
                )) }
            </ul>
        </div>
    );
}


const FooterMenuLink = ({ item }: FooterMenuLinkProps) => {
    const url = item.getUrl();

    if (!url) {
        return <span className='disabled'>{item.getName()}</span>;
    }

    if (item.getLink()?.type === TYPE_LINK_EXTERNAL) {
        return <a className='' href={url}>{item.getName()}</a>;
    }

    return <Link to={url} className=''>{item.getName()}</Link>;
}

export default FooterMenu;

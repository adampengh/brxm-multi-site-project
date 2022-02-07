import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../uikit/Modal';
import ProductPrice from './ProductPrice';
import QuickView from './QuickView';

import './ProductCard.scss';

const ProductGrid = ({ item }: any) => {
    const [showQuickview, setShowQuickview] = useState(false);
    if (!item) {
        return null
    }

    const productUrl = `/p/${item?.itemId?.id}/${item?.displayName.replace(/\s+/g, '-')}`;



    return(
        <li className='product-card'>
            <div className='product-card__img'>
                <p className='product-card__img-badge'><span>New</span></p>
                <Link to={productUrl}>
                    <img src={item?.imageSet?.original?.link?.href} alt={ item?.displayName } loading='lazy' />
                    {/* <img src='/static/images/Image-3x4.jpg' alt={ item?.displayName } loading='lazy' /> */}
                </Link>
                <button
                    className='product-card__img-quick-view'
                    onClick={() => setShowQuickview(true)}
                >QuickView</button>
                <Modal
                    id={`product-id-${item?.itemId?.id}`}
                    showModal={showQuickview}
                    setShowModal={setShowQuickview}
                >
                    <QuickView item={item} />
                </Modal>
            </div>

            <Link to={productUrl}>
                <div className='product-card__details'>
                    <p className='product-card__details-badge'>Best Seller</p>
                    <p className='product-card__details-title'>{ item?.displayName }</p>

                    <div className='product-card__details-price'>
                        <ProductPrice item={item} />
                    </div>
                    <p className='product-card__details-promo'>Extra 10% off sale styles with code 10off</p>
                    <p className='product-card__details-variants'>Petite, Regular, Tall</p>
                </div>
            </Link>
        </li>
    )
};

export default ProductGrid;

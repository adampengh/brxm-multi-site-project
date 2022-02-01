import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import Modal from '../../uikit/Modal';
import QuickView from './QuickView';

import './ProductCard.scss';

const ProductGrid = ({ item }: any) => {
    const [showQuickview, setShowQuickview] = useState(false);
    if (!item) {
        return null
    }

    const ProductPrice = () => {
        const listPrice = item.listPrice?.moneyAmounts?.[0].amount;
        const purchasePrice = item.purchasePrice?.moneyAmounts?.[0].amount;
        if (listPrice !== purchasePrice) {
            const percentDiscount = Math.round(((listPrice - purchasePrice) / listPrice) * 100);
            return (
                <>
                    <CurrencyFormat
                        className='product-card__details-price--list'
                        displayType='text'
                        prefix='$'
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={ item.listPrice?.moneyAmounts?.[0].amount }
                    />
                    <CurrencyFormat
                        className='product-card__details-price--sale'
                        displayType='text'
                        prefix='$'
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={ item.purchasePrice?.moneyAmounts?.[0].amount }
                    />
                    <span className='product-card__details-price--discount'>({ percentDiscount }% off)</span>
                </>
            );
        }
        return (
            <>
                <CurrencyFormat
                    className='product-card__details-price--regular'
                    displayType='text'
                    prefix='$'
                    decimalScale={2}
                    fixedDecimalScale={true}
                    value={ item.purchasePrice?.moneyAmounts?.[0].amount }
                />
            </>
        );
    }

    return(
        <li className='product-card'>
            <div className='product-card__img'>
                <p className='product-card__img-badge'><span>New</span></p>
                <Link to={`/p/${item?.itemId?.id}`}>
                    {/* <img src={item?.imageSet?.original?.link?.href} alt={ item?.displayName } loading='lazy' /> */}
                    <img src='/static/images/Image-3x4.jpg' alt={ item?.displayName } loading='lazy' />
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

            <Link to={`/p/${item?.itemId?.id}`}>
                <div className='product-card__details'>
                    <p className='product-card__details-badge'>Best Seller</p>
                    <p className='product-card__details-title'>{ item?.displayName }</p>

                    <div className='product-card__details-price'>
                        <ProductPrice />
                    </div>
                    <p className='product-card__details-promo'>Extra 10% off sale styles with code 10off</p>
                    <p className='product-card__details-variants'>Petite, Regular, Tall</p>
                </div>
            </Link>
        </li>
    )
};

export default ProductGrid;

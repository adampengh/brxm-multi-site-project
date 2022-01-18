import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './ProductCard.scss';

const ProductGrid = ({ item }: any) => {
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
                        className='product-card__price--list'
                        displayType='text'
                        prefix='$'
                        value={ item.listPrice?.moneyAmounts?.[0].amount }
                    />
                    <CurrencyFormat
                        className='product-card__price--sale'
                        displayType='text'
                        prefix='$'
                        value={ item.purchasePrice?.moneyAmounts?.[0].amount }
                    />
                    <span className='product-card__price--discount'>({ percentDiscount }% off)</span>
                </>
            );
        }
        return (
            <>
                <CurrencyFormat
                    className='product-card__price--regular'
                    displayType='text'
                    prefix='$'
                    value={ item.purchasePrice?.moneyAmounts?.[0].amount }
                />
            </>
        );
    }

    return(
        <li className='product-card'>
            <div className='product-card__img'>
                <img src={ item.imageSet.original.link.href } alt={ item?.displayName } loading='lazy' />
            </div>

            { item?.displayName && <p className='product-card__title'>{ item?.displayName }</p> }

            <div className='product-card__price'>
                <ProductPrice />
            </div>
        </li>
    )
};

export default ProductGrid;

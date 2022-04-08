import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './styles.scss';

interface ProductPriceProps {
    price: any;
    salePrice?: any;
};

const ProductPrice = ({ price, salePrice }: ProductPriceProps) => {
    if (salePrice && price !== salePrice) {
        const percentDiscount = Math.round(((price - salePrice) / price) * 100);
        return (
            <div className='product-price'>
                <CurrencyFormat
                    className='product-price__list'
                    displayType='text'
                    prefix='$'
                    decimalScale={2}
                    fixedDecimalScale={true}
                    value={ price }
                />
                <CurrencyFormat
                    className='product-price__sale'
                    displayType='text'
                    prefix='$'
                    decimalScale={2}
                    fixedDecimalScale={true}
                    value={ salePrice }
                />
                <span className='product-price__discount'>({ percentDiscount }% off)</span>
            </div>
        );
    }

    return (
        <div className='product-price'>
            <CurrencyFormat
                className='product-price__regular'
                displayType='text'
                prefix='$'
                decimalScale={2}
                fixedDecimalScale={true}
                value={ price }
            />
        </div>
    );
}

export default ProductPrice;

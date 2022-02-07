import React from 'react';
import CurrencyFormat from 'react-currency-format';

const ProductPrice = ({item}: any) => {
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

export default ProductPrice;

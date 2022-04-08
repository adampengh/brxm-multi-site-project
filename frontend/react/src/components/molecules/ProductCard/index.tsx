import React from 'react';
import { Link } from 'react-router-dom';
import ProductPrice from '../../atoms/ProductPrice';

import './styles.scss';

interface ProductCardProps {
    pid: string;
    price: string;
    salePrice?: string;
    image: string;
    title: string;
}

const ProductCard = ({
    pid,
    price,
    salePrice,
    image,
    title,
}: ProductCardProps) => {
    const prefix = 'product-card';

    const productUrl = `/p/${pid}/${title.replace(/\s+/g, '-')}`;

    return(
        <div className={prefix}>
            <div className={`${prefix}__img`}>
                <Link to={productUrl}>
                    { image && <img src={image} alt={ title } /> }
                </Link>
            </div>

            <Link to={productUrl}>
                <div className='product-card__details'>
                    <p className='product-card__details-title'>{ title }</p>

                    <div className='product-card__details-price'>
                        <ProductPrice
                            price={price}
                            salePrice={salePrice}
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default ProductCard;

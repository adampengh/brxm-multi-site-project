import React from 'react';
import Cookies from 'universal-cookie';
import { BrComponent, BrProps } from '@bloomreach/react-sdk';
import { useProductDetail } from '@bloomreach/connector-components-react';
import { Container, Row, Column } from '../../../uikit/Layout';
import ProductPrice from '../../atoms/ProductPrice';

import './styles.scss';


export const ProductDetail = ({ component, page }: BrProps) => {
    console.log('ProductDetail');
    console.log('component', component);
    const cookies = new Cookies();
    const prefix = 'product-detail';
    const parameters: any = component.getParameters();
    const itemId = parameters.productId;

    const [item, loading, error] = useProductDetail({
        itemId,
        connector: process.env.REACT_APP_DEFAULT_CONNECTOR || 'brsm',
        // smViewId,
        brUid2: cookies.get('_br_uid_2'),
        customAttrFields: ['reviews', 'reviews_count', 'OnlineOnly', 'inStoreOnly'],
        // customVariantAttrFields,
    });

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return null;
    }

    if (!item) {
        return null;
    }

    const price = item.listPrice?.moneyAmounts?.[0]?.displayValue;
    const salePrice = item.purchasePrice?.moneyAmounts?.[0]?.displayValue;

    return (
        <>
            <Container className={prefix}>
                <Row className={`${prefix}__top`}>
                    <Column className={`${prefix}__top-left`}>
                        <img src={item?.imageSet?.original?.link?.href || undefined} alt="Product" />
                    </Column>
                    <Column className={`${prefix}__top-right`}>
                        <h1>{ item.displayName }</h1>
                        <p>Product Code: { item?.itemId?.id }</p>
                        <p>SKU: {item?.itemId?.code }</p>
                        <p>{ item.description }</p>

                        <ProductPrice
                            price={price}
                            salePrice={salePrice}
                        />
                    </Column>
                </Row>
            </Container>
        </>
    )
}

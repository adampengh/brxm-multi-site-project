import React from 'react';
import { BrProps } from '@bloomreach/react-sdk';
import { useProductDetail } from '@bloomreach/connector-components-react';
import { Container, Row, Column } from '../../../uikit/Layout';

import './ProductDetail.scss';


export const ProductDetail = ({ component, page }: BrProps) => {
    const prefix = 'product-detail';
    const parameters: any = component.getParameters();
    const itemId = parameters.productId;

    const [item, loading, error] = useProductDetail({
        itemId,
        connector: process.env.REACT_APP_DEFAULT_CONNECTOR || 'brsm',
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
                    </Column>
                </Row>
            </Container>
        </>
    )
}

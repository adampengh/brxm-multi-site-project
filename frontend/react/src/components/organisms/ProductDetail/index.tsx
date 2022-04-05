import React from 'react';
import { BrComponent, BrProps } from '@bloomreach/react-sdk';
import { useProductDetail } from '@bloomreach/connector-components-react';
import { Container, Row, Column } from '../../../uikit/Layout';

import './ProductDetail.scss';


export const ProductDetail = ({ component, page }: BrProps) => {
    console.log('ProductDetail');
    const prefix = 'product-detail';
    const parameters: any = component.getParameters();
    console.log('parameters', parameters);
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

    console.log('item', item);

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

                <Row className={`${prefix}__bottom`}>
                    <Column>
                        <Row>
                            <Column>
                                <BrComponent path='product-detail-bottom-1' />
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <BrComponent path='product-detail-bottom-2' />
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <BrComponent path='product-detail-bottom-3' />
                            </Column>
                        </Row>
                    </Column>
                </Row>

            </Container>

        </>

    )
}

import React from 'react';
import { BrProps } from '@bloomreach/react-sdk';
import { useProductDetail } from '@bloomreach/connector-components-react';
import { Container, Row, Column } from '../../uikit/Layout';

export const ProductDetail = ({ component, page }: BrProps) => {
    console.log('ProductDetail');
    console.log('component', component.getParameters());

    const connector = 'brsm';

    const parameters: any = component.getParameters();
    const itemId = parameters.productId;

    const [item, loading, error] = useProductDetail({
        itemId,
        connector,
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
            <Container className='product-detail'>
                <Row style={{ flexWrap: 'nowrap' }}>
                    <Column>
                        <img src={item?.imageSet?.original?.link?.href || undefined} alt="Product" />
                    </Column>
                    <Column>
                        <h1>{ item.displayName }</h1>
                        <p>Product Code: { item?.itemId?.id }</p>
                        <p>{ item.description }</p>
                    </Column>
                </Row>
            </Container>

        </>

    )
}

import React, { useState } from 'react';
import { useProductGridCategory } from '@bloomreach/connector-components-react';
import { BrProps } from '@bloomreach/react-sdk';
import { parse } from 'query-string';
import { Container, Row, Column } from '../../uikit/Layout';

import { CategoryBreadcrumb } from '../Breadcrumbs';
import PageTitle from '../PageTitle';
import ProductCard from './ProductCard';

import './ProductListingGrid.scss';

export const ProductListingGrid = ({ page, component }: BrProps) => {
    console.log('ProductListingGrid');

    const CONNECTOR = 'brsm';

    // State
    const [queryPageSize, setQueryPageSize] = useState(24);
    let [queryOffset, setQueryOffset] = useState(0);

    const [desktopColumns, setDesktopColumns] = useState(3);

    const documentRef = component?.getModels()?.document;
    const document = page?.getContent(documentRef);

    const params = parse(window.location.search);
    console.log('params', params);
    if (params.page) {
        queryOffset = (Number(params.page) - 1) * queryPageSize;
    }

    const {
        categoryId,
        pageMetadata,
    } = document?.getData<any>();

    const {
        // canonicalUrl,
        // metaDescription,
        // metaKeywords,
        // ogDescription,
        // ogImage,
        // ogTitle,
        // ogType,
        // ogUrl,
        pageTitle,
    } = pageMetadata;

    // An exmple usage with the hook.
    const [, itemsPageResult, loading, error] = useProductGridCategory({
        categoryId,
        connector: CONNECTOR,
        pageSize: queryPageSize,
        offset: queryOffset,
    });

    if (loading) {
        return null;
    }

    if (error) {
        return <div className="alert alert-danger" role="alert">{error.message}</div>;
    }

    if (!itemsPageResult) {
        return null;
    }
    console.log('itemsPageResult', itemsPageResult);
    const {
        // count,
        facetResult,
        items,
        limit,
        offset,
        total,
    } = itemsPageResult;

    const start = offset + 1;
    let end = limit;
    if (offset !== 0) {
        end = offset + limit;
    }


    return(
        <Container className='product-listing'>
            <Row>
                <Column>
                    <CategoryBreadcrumb
                        text={pageTitle}
                    />
                </Column>
            </Row>

            <Row>
                <Column>
                    <PageTitle as='h1' alignment='center'>{ pageTitle }</PageTitle>
                </Column>
            </Row>

            <Row>
                <Column>
                    <p>
                        Items <span>{ start }</span> to <span>{ end }</span> of <span>{ total } </span>
                    </p>
                </Column>
                <Column style={{textAlign: 'right'}}>
                    <label>Items Per Row</label>
                    <select onChange={(event) => setDesktopColumns(Number(event.target.value))} style={{marginLeft: '4px'}}>
                        {[3,4,5,6].map((item) => <option value={ item }>{ item }</option> )}
                    </select>
                </Column>
            </Row>
            <Row className='product-listing__header'>
                <Column>Filters</Column>
                <Column>Sorting</Column>
                <Column>
                    <span>
                        <label>Grid View: </label>
                        <span className='button-group'>
                            {[3,4,6].map((item) =>
                                <button
                                    className={`button button-small ${desktopColumns === item ? 'active': ''}`}
                                    value={ item }
                                    onClick={() => setDesktopColumns(Number(item))}
                                >
                                    { item }
                                </button>
                            )}
                        </span>
                    </span>
                    <span>
                        <label>Products: </label>
                        <span className='button-group'>
                            {[24,48].map((item) =>
                                <button
                                    className={`button button-medium ${queryPageSize === item ? 'active' : ''}`}
                                    value={ item }
                                    onClick={() => setQueryPageSize(Number(item))}
                                >
                                    { item }
                                </button>
                            )}
                        </span>
                    </span>
                </Column>
            </Row>
            <Row className='product-grid'>
                <Column className='product-grid__facets'>
                    <h4>Facets</h4>
                </Column>
                <Column className='product-grid__grid'>
                    <ul className='product-grid__list' data-desktop-columns={desktopColumns}>
                        { items && items.map((item: any, index: number) =>
                            <ProductCard item={item} key={index} />
                        )}
                    </ul>
                </Column>
            </Row>
        </Container>
    )
}

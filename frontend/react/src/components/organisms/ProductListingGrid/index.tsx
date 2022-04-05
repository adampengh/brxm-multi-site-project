import React, { useState } from 'react';
import { useProductGridCategory } from '@bloomreach/connector-components-react';
import { BrProps } from '@bloomreach/react-sdk';
import { parse } from 'query-string';
import { Container, Row, Column } from '../../../uikit/Layout';

import { CategoryBreadcrumb } from '../../molecules/Breadcrumbs';
// import FacetsList from './FacetsList';
import PageTitle from '../../atoms/PageTitle';
import ProductCard from './ProductCard';

import './ProductListingGrid.scss';

export const ProductListingGrid = ({ page, component }: BrProps) => {
    console.log('ProductListingGrid');

    // State
    let [querySort, ] = useState('-price');
    const [queryPageSize, setQueryPageSize] = useState(24);
    let [queryOffset, ] = useState(0);

    const [mobileColumns, setMobileColumns] = useState(2);
    const [desktopColumns, setDesktopColumns] = useState(4);

    const documentRef = component?.getModels()?.document;
    const document = page?.getContent(documentRef);

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
    const params = parse(window.location.search);
    if (params.page) {
        queryOffset = (Number(params.page) - 1) * queryPageSize;
    }
    if (params.sort) {
        let sort;
        if (typeof params.sort === 'object') {
            sort = params.sort[params.sort.length - 1];
        } else {
            sort = params.sort;
        }

        sort = sort.split('-');
        if (sort[1] === 'desc') {
            sort = `-${sort[0]}`;
        } else {
            sort = `${sort[0]}`;
        }
    }
    const [, itemsPageResult, loading, error] = useProductGridCategory({
        categoryId,
        customAttrFields: ['reviews', 'reviews_count', 'OnlineOnly', 'inStoreOnly'],
        // customVariantAttrFields,
        connector: process.env.REACT_APP_DEFAULT_CONNECTOR || 'brsm',
        // facetFieldFilters,
        offset: queryOffset,
        pageSize: queryPageSize,
        sortFields: querySort,
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

    const {
        // count,
        // facetResult,
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
                    <CategoryBreadcrumb text={pageTitle} />
                </Column>
            </Row>

            <Row>
                <Column>
                    <PageTitle as='h1' alignment='center'>{ pageTitle }</PageTitle>
                </Column>
            </Row>

            <Row className='product-listing__header'>
                <Column className='product-listing__header-filters'>Filters</Column>
                <Column className='product-listing__header-sorting'>
                    <label>Sort By: </label>
                    <select>
                        <option>Newest</option>
                        <option>Best Selling</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to Hight</option>
                    </select>
                </Column>
                <Column className='product-listing__header-options'>
                    <span className='button-group'>
                        <label>Grid View: </label>
                        <span className='hidden-lg'>
                            {[1,2].map((item, index) =>
                                <button
                                    className={`button ${mobileColumns === item ? 'active': ''}`}
                                    value={ item }
                                    onClick={() => setMobileColumns(Number(item))}
                                    key={index}
                                >
                                    { item }
                                </button>
                            )}
                        </span>
                        <span className='hidden-sm hidden-md'>
                            {[3,4,5,6].map((item, index) =>
                                <button
                                    className={`button ${desktopColumns === item ? 'active': ''}`}
                                    value={ item }
                                    onClick={() => setDesktopColumns(Number(item))}
                                    key={index}
                                >
                                    { item }
                                </button>
                            )}
                        </span>
                    </span>
                    <span className='button-group'>
                        <label>Products: </label>
                        <span>
                            {[24,48].map((item, index) =>
                                <button
                                    className={`button ${queryPageSize === item ? 'active' : ''}`}
                                    value={ item }
                                    onClick={() => setQueryPageSize(Number(item))}
                                    key={index}
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
                    {/* <FacetsList facets={facetResult?.fields} /> */}
                </Column>
                <Column className='product-grid__grid'>
                    <ul className='product-grid__list' data-mobile-columns={mobileColumns} data-desktop-columns={desktopColumns}>
                        { items && items.map((item: any, index: number) =>
                            <ProductCard item={item} key={index} />
                        )}
                    </ul>
                </Column>
            </Row>

            <Row>
                <Column>
                    <p style={{ textAlign: 'center' }}>
                        Items <span>{ start }</span> to <span>{ end }</span> of <span>{ total } </span>
                    </p>
                </Column>
            </Row>
        </Container>
    )
}

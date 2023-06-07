import React, { useState } from 'react';
import { useProductGridCategory } from '@bloomreach/connector-components-react';
import { BrPageContext, BrProps } from '@bloomreach/react-sdk';
import { parse } from 'query-string';
import { Container, Row, Column } from '../../../uikit/Layout';

import { CategoryBreadcrumb } from '../../molecules/Breadcrumbs';
// import FacetsList from './FacetsList';
import PageMetadata from '../../atoms/PageMetadata';
import PageTitle from '../../atoms/PageTitle';
import ProductCard from '../../molecules/ProductCard';

import './styles.scss';
import { ImageSet } from '@bloomreach/spa-sdk';

export const ProductListingGrid = ({ page, component }: BrProps) => {
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
        categoryPageInGridBanners,
    } = document?.getData<any>();

    const {
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

        sort = sort?.split('-');
        if (sort?.[1] === 'desc') {
            sort = `-${sort[0]}`;
        } else {
            sort = `${sort?.[0]}`;
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
        count,
        // facetResult,
        items,
        limit,
        offset,
        total,
    } = itemsPageResult;


    const start = offset + 1;
    let end = count < limit ? count : limit;
    if (offset !== 0) {
        end = offset + limit;
    }


    // Merge products array and in-grid banners array
    const sortedBanners = categoryPageInGridBanners && categoryPageInGridBanners.sort((a: any, b: any) => {
        return a?.desktopPosition - b?.desktopPosition;
    });
    const products = items.map((item: any, index: number) => {
        return sortedBanners.find((banner: any) => banner.desktopPosition === index + 1) || item;
    })

    return(
        <Container className='product-listing'>
            <PageMetadata pageMetadata={pageMetadata} />
            <Row>
                <Column>
                    <CategoryBreadcrumb text={pageTitle} />
                </Column>
            </Row>

            <Row>
                <Column>
                    <PageTitle as='h1' style={{textAlign: 'center'}}>{ pageTitle }</PageTitle>
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
                        { products && products.map((item: any, index: number) => {
                            if (item.contentType) {
                                return (
                                    <InGridBanner key={index} banner={item} />
                                )
                            } else if (item.__typename === 'Item') {
                                return (
                                    <ProductCard
                                        key={index}
                                        pid={item?.itemId.id}
                                        image={item?.imageSet?.original?.link?.href}
                                        title={item?.displayName}
                                        price={item.listPrice?.moneyAmounts?.[0].amount}
                                        salePrice={item?.purchasePrice?.moneyAmounts?.[0].amount}
                                    />
                                )
                            } else {
                                return null;
                            }
                        }) }
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


const InGridBanner = ({ banner }: any) => {
    const page = React.useContext(BrPageContext);

    if (!banner) {
        return null;
    }

    const {
        altText,
        image,
        href,
        html,
    } = banner;

    const {
        desktopImage: desktopImageRef,
    } = image;

    const desktopImage = desktopImageRef && page?.getContent<ImageSet>(desktopImageRef);

    return (
        <div className='in-grid-banner'>
            { href && <a href={href}></a>}
            <div className='in-grid-banner__img'>
                { desktopImage && <img src={desktopImage?.getOriginal()?.getUrl()} alt={altText} /> }
            </div>
            { html && page && <div className='in-grid-banner__text' dangerouslySetInnerHTML={{ __html: page.rewriteLinks(html) }} />}
        </div>
    )
}

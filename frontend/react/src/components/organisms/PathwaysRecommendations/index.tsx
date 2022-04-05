import axios from 'axios';
import Cookies from 'universal-cookie';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BrManageContentButton, BrProps } from '@bloomreach/react-sdk';
import { Container } from '../../../uikit';
import { Link } from 'react-router-dom';
import { ReactComponent as AngleLeft } from '../../../assets/icons/angle-left.svg';
import { ReactComponent as AngleRight } from '../../../assets/icons/angle-right.svg';
import ProductPrice from '../ProductListingGrid/ProductPrice';

import './styles.scss';


export const PathwaysRecommendations = ({ page, component }: BrProps) => {
    const cookies = new Cookies();

    // State
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const { document: documentRef } = component.getModels();
    const document = documentRef && page.getContent(documentRef);

    const {
        title,
        widgetId,
        widgetType,
        settings,
        responsive,
    } = document?.getData() || {};

    const params = {
        account_id: process.env.REACT_APP_BRSM_ACCOUNT_ID,
        domain_key: process.env.REACT_APP_BRSM_DOMAIN_KEY,
        url: window.location.href,
        _br_uid_2: cookies.get('_br_uid_2'),
        fields: 'pid,title,price,sale_price,url,thumb_image,reviews,reviews_count',
        // ...(categoryId && {cat_id: categoryId}),
    }

    useEffect(() => {
        if (widgetId && widgetType) {
            axios.get(`${process.env.REACT_APP_BRSM_PATHWAYS_API}/${widgetType}/${widgetId}`, { params })
                .then((response) => {
                    setIsLoaded(true);
                    setItems(response?.data?.response?.docs);
                })
                .catch((error) => {
                    setIsLoaded(true);
                    setError(error);
                })
        }
    }, [document]);

    if (!document) {
        return (
            <Container className='pathways-recommendations'>
                <BrManageContentButton
                    documentTemplateQuery="new-PathwaysRecommendationsDocument-document"
                    folderTemplateQuery="new-PathwaysRecommendationsDocument-folder"
                    parameter="document"
                    root="components/pathways-and-recommendations"
                    relative
                />
            </Container>
        );
    }

    if (error) {
        return <div>Error</div>;
    }

    if (!isLoaded) {
        return null;
    }

    if (!items) {
        return null;
    }

    const PreviousArrow = ({ className, onClick}: any) => {
        return (
            <div className={className} onClick={onClick}>
                <AngleLeft />
            </div>
        );
    }

    const NextArrow = ({ className, onClick}: any) => {
        return (
            <div className={className} onClick={onClick}>
                <AngleRight />
            </div>
        );
    }

    const sliderSettings = {
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
        ...settings,
        responsive: [...responsive],
    };

    return (
        <Container className='pathways-recommendations' style={{positon: 'relative'}}>
            <BrManageContentButton
                content={document}
                documentTemplateQuery="new-PathwaysRecommendationsDocument-document"
                folderTemplateQuery="new-PathwaysRecommendationsDocument-folder"
                parameter="document"
                root="components/pathways-and-recommendations"
                relative
            />
            {title && <h3 className='pathways-recommendations__title'>{ title }</h3> }
            <Slider className='pathways-recommendations__slider' {...sliderSettings}>
                {items.map((item: any, index) => (
                    <div key={index} className='pathways-recommendations__slide'>
                        <Link to={`/p/${item.pid}`}>
                            <img src={item.thumb_image} alt='product' style={{width:'100%'}} />
                        </Link>

                        <div className='pathways-recommendations__title'><strong>{ item.title }</strong></div>
                        <div className='pathways-recommendations__title'>
                            <span>{ item.price }</span>
                            <span>{ item.sale_price }</span>
                        </div>
                        <ProductPrice item={item} />
                    </div>
                ))}
            </Slider>
        </Container>
    )
}

import axios from 'axios';
import Cookies from 'universal-cookie';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BrProps } from '@bloomreach/react-sdk';
import { Container } from '../../uikit';
import { Link } from 'react-router-dom';
import { ReactComponent as AngleLeft } from '../../assets/icons/angle-left.svg';
import { ReactComponent as AngleRight } from '../../assets/icons/angle-right.svg';
import { Settings } from 'react-slick';

import './PathwaysRecommendations.scss';


interface PathwaysRecommendationsParamProps extends Settings {
    widgetId: String;
    widgetType: String;
    title?: String;
}

export const PathwaysRecommendations = ({ page, component }: BrProps) => {
    const productGridCategoryModel = page?.getComponent<any>('main')?.getChildren()
        .filter((component: any) => component.getName() === 'ProductListingGrid')[0];
    const productGridCategoryRef = productGridCategoryModel?.getModels()?.document;
    const document = productGridCategoryRef && page.getContent(productGridCategoryRef);
    let categoryId;
    if (document) {
        categoryId = document?.getData().categoryId;
    }

    const cookies = new Cookies();
    const parameters = component.getParameters<PathwaysRecommendationsParamProps>();
    const {
        arrows,
        autoplay,
        autoplaySpeed,
        dots,
        infinite,
        slidesToShow,
        slidesToScroll,
        speed,
        widgetId,
        widgetType,
    } = parameters;


    const PreviousArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <AngleLeft />
            </div>
        );
    }

    const NextArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <AngleRight />
            </div>
        );
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const params = {
        account_id: process.env.REACT_APP_BRSM_ACCOUNT_ID,
        domain_key: process.env.REACT_APP_BRSM_DOMAIN_KEY,
        url: window.location.href,
        _br_uid_2: cookies.get('_br_uid_2'),
        fields: 'pid,title,price,sale_price,url,thumb_image,reviews,reviews_count',
        ...(categoryId && {cat_id: categoryId}),
    }

    useEffect(() => {
        axios.get(`https://pathways.dxpapi.com/api/v2/widgets/${widgetType}/${widgetId}`, {
            params: params
        })
            .then((response) => {
                setIsLoaded(true);
                setItems(response?.data?.response?.docs);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, []);

    if (error) {
        return <div>Error</div>;
    }

    if (!isLoaded) {
        return null;
    }

    if (!items) {
        return null;
    }

    const settings = {
        arrows,
        autoplay,
        autoplaySpeed,
        dots,
        infinite,
        slidesToShow,
        slidesToScroll,
        speed,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <Container className='pathways-recommendations'>
            {parameters.title && <h3 className='pathways-recommendations__title'>{ parameters.title }</h3> }
            <Slider className='pathways-recommendations__slider' {...settings}>
                {items.map((item: any, index) => (
                    <div key={index} className='pathways-recommendations__slide'>
                        <Link to={`/p/${item.pid}`}>
                            <img src={item.thumb_image} alt='product' style={{width:'100%'}} />
                        </Link>

                        <div className='pathways-recommendations__title'><strong>{ item.title }</strong></div>
                        <div>
                            <p>{ item.price }</p>
                            <p>{ item.sale_price }</p>
                        </div>

                    </div>
                ))}
            </Slider>
        </Container>
    )
}



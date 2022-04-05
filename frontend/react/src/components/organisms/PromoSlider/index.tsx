import React from 'react';
import Slider from 'react-slick';
import { ReactComponent as AngleLeft } from '../../../assets/icons/angle-left.svg';
import { ReactComponent as AngleRight } from '../../../assets/icons/angle-right.svg';

import './PromoSlider.scss';

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

const PromoSlider = () => {
    const settings = {
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 750,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />
    };

    return(
        <section className='promo-slider'>
            <Slider className='promo-slider__inner' {...settings}>
                <div className='promo-slider__slide'>
                    <p>Extra 60% off sale styles. Online Only. Use Code GOBIGGER.</p>
                </div>
                <div className='promo-slider__slide'>Slide 2</div>
                <div className='promo-slider__slide'>Slide 3</div>
            </Slider>
        </section>
    );
}

export default PromoSlider;

import React from 'react';
import Slider from "react-slick";
import styles from "./Carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ReactComponent as RightChevron} from '../../../../assets/images/Main/carousel/right-chevron.svg';
import {ReactComponent as LeftChevron} from '../../../../assets/images/Main/carousel/left-chevron.svg';
import {WhyUsCarousel} from "../../../../utils/constants/whyUsCarousel";
import useDeviceDetect from "../../../../hooks/useDeviceDetect";


function RightArrow(props) {
    const {className, style, onClick} = props;
    const {isMobile} = useDeviceDetect();
    const mR = isMobile ? "2px" : "-20px";
    return (
        <RightChevron
            className={className}
            style={{...style, height: "40px", width: "40px", marginRight: mR}}
            onClick={onClick}
        />
    );
}

function LeftArrow(props) {
    const {className, style, onClick} = props;
    const {isMobile} = useDeviceDetect();
    const mL = isMobile ? "5px" : "-20px";
    return (
        <LeftChevron
            className={className}
            style={{...style, height: "40px", width: "40px", marginLeft: mL}}
            onClick={onClick}
        />
    );
}


function Carousel(props) {
    const {isMobile} = useDeviceDetect();
    const slidesToShow = isMobile ? 1 : 3;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        className: "center",
        centerPadding: "60px",

        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
    };

    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {
                    WhyUsCarousel.map(item => (
                        <div key={item.id*1214}>
                            <div className={styles.cardContainer}>
                                <img className={styles.cardImage} src={item.image} alt={item.alt}/>
                                <section className={styles.cardText}>{item.text}</section>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>

    );
}

export default Carousel;




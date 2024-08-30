import React from 'react';
import styles from './WhyUs.module.scss';
import Carousel from "./Carousel/Carousel";

function WhyUs() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>ПОЧЕМУ <br className={styles.brMobile}/> ИМЕННО МЫ</div>
            <Carousel/>
        </div>
    );
}

export default WhyUs;
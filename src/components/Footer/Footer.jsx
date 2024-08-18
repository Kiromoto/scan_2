import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/Footer/logoFooter.svg';


export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Footer logo"/>
            </div>
            <div className={styles.info}>
                <div>г. Москва, Цветной б-р, 40 <br/> +7 495 771 21 11 <br/> info@skan.ru
                </div>
                <div className={styles.copyright}>Copyright. 2023</div>
            </div>
        </footer>
    );
}
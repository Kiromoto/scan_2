import React from 'react';
import styles from './FooterLoginForm.module.scss'
import google from '../../../../../assets/images/Main/auth/google.svg'
import facebook from '../../../../../assets/images/Main/auth/facebook.svg'
import yandex from '../../../../../assets/images/Main/auth/yandex.svg'
import {NavLink} from "react-router-dom";

function FooterLoginForm() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>Войти через:</section>
            <div className={styles.iconsBox}>
                <div className={styles.oneIcon}>
                    <NavLink className={styles.oneIconLink} href='login'>
                        <img src={google} alt='GoogleLink'/>
                    </NavLink>
                </div>
                <div className={styles.oneIcon}>
                    <NavLink className={styles.oneIconLink} href='login'>
                        <img src={facebook} alt='Facebook'/>
                    </NavLink>
                </div>
                <div className={styles.oneIcon}>
                    <NavLink className={styles.oneIconLink} href='login'>
                        <img src={yandex} alt='Yandex'/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default FooterLoginForm;
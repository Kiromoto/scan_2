import React from 'react';
import styles from "./LogoComp.module.scss";
import logo from "../../../assets/images/Header/logo.svg";

function LogoComp() {
    return (
        <div className={styles.logoContainer}>
            <img className={styles.logoImage} src={logo} alt='logo_scan'/>
        </div>
    );
}

export default LogoComp;
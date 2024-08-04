import React from 'react';
import styles from "../Loading/Loading.module.scss";
import load from '../../../assets/images/Header/load.svg'

function Loading({...props}) {
    return (
        <div className={styles.container} {...props}>
            <img src={load} alt='load'/>
        </div>
    );
};
export default Loading;
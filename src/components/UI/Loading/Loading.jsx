import React from 'react';
import styles from "../Loading/Loading.module.scss";
import load from '../../../assets/images/Header/load.svg'

function Loading({imgSize, textAdd, ...props}) {
    return (
        <div className={styles.container} {...props}>
            <img style={{height: imgSize, width: imgSize}} src={load} alt='load'/>
            {textAdd
                ?
                <p className={styles.textAdd}>{textAdd}</p>
                :
                <></>
            }
        </div>
    );
};
export default Loading;
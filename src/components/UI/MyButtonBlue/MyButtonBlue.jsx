import React from 'react';
import styles from "../MyButtonBlue/MyButtonBlue.module.scss";

export default function MyButtonBlue({children, ...props}) {
    return (
        <button className={styles.myBtn} {...props}>
            {children}
        </button>
    );
};
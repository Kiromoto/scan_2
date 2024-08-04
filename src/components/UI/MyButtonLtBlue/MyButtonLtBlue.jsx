import React from 'react';
import styles from "../MyButtonLtBlue/MyButtonLtBlue.module.scss";

export default function MyButtonLtBlue({children, ...props}) {
    return (
        <button {...props} className={styles.myBtn} {...props}>
            {children}
        </button>
    );
};
import React from 'react';
import styles from "./BigBlackMan.module.scss";
import BigBM from "../../../assets/images/Main/BigBlackMan.svg";

function BigBlackMan() {
    return (
        <div className={styles.container}>
            <img src={BigBM} alt="BigBlackMan"/>
        </div>
    );
}

export default BigBlackMan;
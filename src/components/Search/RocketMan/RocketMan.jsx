import React from 'react';
import styles from './RocketMan.module.scss'
import rocketWithMan from '../../../assets/images/Main/search/rocketWithMan.svg'

function RocketMan(props) {
    return (
        <img src={rocketWithMan} className={styles.imgRocketMan} alt="imageRocketMan"/>
    );
}

export default RocketMan;
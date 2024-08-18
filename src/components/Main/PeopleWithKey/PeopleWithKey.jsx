import React from 'react';
import styles from './PeopleWithKey.module.scss'
import peopleWithKey from '../../../assets/images/Main/auth/peopleWithKey.svg'

function PeopleWithKey(props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Для оформления подписки <br/> на тариф, необходимо авторизоваться.</div>
            <img className={styles.image} src={peopleWithKey} alt='peopleWithKey'/>
        </div>
    );
}

export default PeopleWithKey;
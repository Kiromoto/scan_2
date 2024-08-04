import React from 'react';
import styles from './NotAuthorized.module.scss';
import MyButtonLight from "../../UI/MyButtonLight/MyButtonLight";
import MyButtonLtBlue from "../../UI/MyButtonLtBlue/MyButtonLtBlue";
import {useAuth} from "../../../hooks/useAuth";

function NotAuthorized(props) {
    const { setIsLoggedIn } = useAuth()

    return (
        <div className={styles.container}>
            <MyButtonLight>Зарегистрироваться</MyButtonLight>
            <div className={styles.slash}></div>
            <MyButtonLtBlue
                onClick={() => {
                    setIsLoggedIn(true)
                }}>Войти</MyButtonLtBlue>
        </div>
    );
}

export default NotAuthorized;
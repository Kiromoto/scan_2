import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss'
import colors from '../../../../index.scss'
import MyButtonLight from "../../../UI/MyButtonLight/MyButtonLight";
import MyInput from "../../../UI/MyInput/MyInput";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../../hooks/useAuth";
import MyButtonBlue from "../../../UI/MyButtonBlue/MyButtonBlue";
import FooterLoginForm from "./FooterLoginForm/FooterLoginForm";
import axios from "axios";


function LoginForm() {
    const {isLoggedIn, setIsLoggedIn, accessToken, setAccessToken, expire, setExpire} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";

    const [authInfo, setAuthInfo] = useState({
        login: "sf_student1",
        loginError: false,
        pass: "4i2385j",
        passError: false,
        opacityLoginBtn: 0.5,
    });

    if (isLoggedIn) {
        navigate(fromPage, {replace: true});
    }

    useEffect(() => {
        setAuthInfo({...authInfo, opacityLoginBtn: (authInfo.login && authInfo.pass) ? 1 : 0.5})
    }, [authInfo.login, authInfo.pass])

    const doLogin = (event) => {
        event.preventDefault();
        axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', {
            "login": authInfo.login,
            "password": authInfo.pass
        })
            .then(response => {
                console.log("login response from POST to account/login", {...response});
                setAccessToken(response.data.accessToken);
                setExpire(response.data.expire);
                setIsLoggedIn(true);
                navigate(fromPage, {replace: true});
        })
            .catch(error => {
                console.log("login response from POST to account/login is ERROR", error);
            })
    }


    return (
        <div className={styles.container}>
            <div className={styles.loginRegisrationBox}>
                <div className={styles.lgContainer} style={{width: 151}}>
                    <MyButtonLight style={{
                        fontSize: 16,
                        color: colors.colorGreen,
                        opacity: 1,
                    }}>Войти</MyButtonLight>
                    <div className={styles.lineLgContainer}></div>
                </div>
                <div className={styles.lgContainer} style={{width: 213}}>
                    <MyButtonLight style={{
                        fontSize: 16,
                        opacity: 1,
                        color: "rgba(199, 199, 199, 1)",
                    }}>Зарегистрироваться</MyButtonLight>
                    <div className={styles.lineLgContainer} style={{
                        background: "rgba(199, 199, 199, 1)",
                    }}></div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <form className={styles.inputForm}>
                    <p className={styles.inputTitle}>Логин или номер телефона:</p>
                    <MyInput
                        name="login"
                        value={authInfo.login}
                        type="text"
                        error={authInfo.loginError}
                        errorMsg="Введите корректные данные"
                        placeholder=""
                        onChange={e => {
                            setAuthInfo({...authInfo, login: e.target.value})
                        }}
                    />

                    <p className={styles.inputTitle}>Пароль:</p>
                    <MyInput
                        name="password"
                        value={authInfo.pass}
                        type="password"
                        error={authInfo.passError}
                        errorMsg="Неправильный пароль"
                        placeholder=""
                        onChange={e => {
                            setAuthInfo({...authInfo, pass: e.target.value})
                        }}
                    />

                    <MyButtonBlue
                        style={{width: "379px", opacity: authInfo.opacityLoginBtn}}
                        disabled={!(authInfo.login && authInfo.pass)}
                        onClick={(e) => {doLogin(e)}}
                    >Войти</MyButtonBlue>
                </form>
                <NavLink className={styles.resumeLink} href='login'>Восстановить пароль</NavLink>
                <FooterLoginForm/>
            </div>
        </div>
    );
}

export default LoginForm;
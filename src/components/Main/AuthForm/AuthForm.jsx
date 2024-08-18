import React from 'react';
import styles from './AuthForm.module.scss'
import padLock from '../../../assets/images/Main/auth/padlock.svg'
import LoginForm from "./LoginForm/LoginForm";

function AuthForm() {
    return (
        <div className={styles.container}>
            <img className={styles.lockImage} src={padLock} alt='padLock'/>
            <div className={styles.loginForm}>
                <LoginForm/>
            </div>
        </div>
    );
}

export default AuthForm;
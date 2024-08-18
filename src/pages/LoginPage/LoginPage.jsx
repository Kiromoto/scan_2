import React from 'react';
import PeopleWithKey from "../../components/Main/PeopleWithKey/PeopleWithKey";
import AuthForm from "../../components/Main/AuthForm/AuthForm";
import styles from './LoginPage.module.scss'

function LoginPage() {
    return (
        <div className={styles.container}>
            <PeopleWithKey/>
            <AuthForm/>
        </div>
    );
}

export default LoginPage;
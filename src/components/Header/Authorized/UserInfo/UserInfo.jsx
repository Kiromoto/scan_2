import React from 'react';
import styles from './UserInfo.module.scss';
import MyButtonLight from "../../../UI/MyButtonLight/MyButtonLight";
import ava from '../../../../assets/images/avatars/ava.jpg';
import {useAuth} from "../../../../hooks/useAuth";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function UserInfo() {
    const { setIsLoggedIn, setAccessToken, setExpire } = useAuth()
    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false);
        setAccessToken(null);
        setExpire(null);
        navigate('/login')
    }

    return (
        <div className={styles.container}>
            <div className={styles.nameLogoutContainer}>
                <div className={styles.nicknameDiv}>Алексей А.</div>
                <MyButtonLight
                    style={{fontSize: 10, alignSelf: "end"}}
                    onClick={logout}
                >Выйти</MyButtonLight>
            </div>
            <div className={styles.avaContainer}>
                <img className={styles.avatarImg} src={ava} alt="avatar"/>
            </div>
        </div>
    );
}

export default UserInfo;
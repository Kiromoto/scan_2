import React from 'react';
import styles from './Header.module.scss';
import {useAuth} from "../../hooks/useAuth";
import LogoComp from "./LogoComp/LogoComp";
import Navbar from "./Navbar/Navbar";
import Authorized from "./Authorized/Authorized";
import NotAuthorized from "./NotAuthorized/NotAuthorized";


export default function Header() {
    const { isLoggedIn } = useAuth()
    return (
        <div className={styles.headerContainer}>
            <LogoComp/>
            <Navbar/>
            {isLoggedIn ? <Authorized/> : <NotAuthorized/>}
        </div>
    );
}
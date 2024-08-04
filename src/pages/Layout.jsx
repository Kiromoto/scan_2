import React from 'react';
import {Outlet} from "react-router-dom";
import styles from "./Layout.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Layout() {
    return (
        <div className={styles.appСontainer}>
            <Header/>
            <div className={styles.mainСontainer}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

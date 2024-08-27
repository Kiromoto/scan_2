import React from 'react';
import styles from './Header.module.scss';
import {useAuth} from "../../hooks/useAuth";
import LogoComp from "./LogoComp/LogoComp";
import Navbar from "./Navbar/Navbar";
import Authorized from "./Authorized/Authorized";
import NotAuthorized from "./NotAuthorized/NotAuthorized";
import useDeviceDetect from "../../hooks/useDeviceDetect";


export default function Header() {
	const {isLoggedIn} = useAuth()
	const {isMobile} = useDeviceDetect();
 
	return (
		<div className={styles.headerContainer}>
			<LogoComp/>
      {!isMobile ? <Navbar/> : <></>}
			{isLoggedIn ? <Authorized/> : <NotAuthorized/>}
		</div>
	);
}
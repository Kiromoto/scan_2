import React from 'react';
import styles from './Header.module.scss';
import {useAuth} from "../../hooks/useAuth";
import LogoComp from "./LogoComp/LogoComp";
import Navbar from "./Navbar/Navbar";
import Authorized from "./Authorized/Authorized";
import NotAuthorized from "./NotAuthorized/NotAuthorized";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import UserInfo from './Authorized/UserInfo/UserInfo';
import UserLimits from './Authorized/UserLimits/UserLimits';


export default function Header() {
	const {isLoggedIn} = useAuth()
	const {isMobile} = useDeviceDetect();
 
	return (
		<div className={styles.headerContainer}>
			<LogoComp/>
			{
				isMobile
					?
					<>
						{isLoggedIn ?  <UserLimits/> : <></>}
						<BurgerMenu/>
					</>
					:
					<>
						<Navbar/>
						{isLoggedIn ? <Authorized/> : <NotAuthorized/>}
					</>
			}
		</div>
	);
}
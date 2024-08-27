import React from 'react';
import styles from './Authorized.module.scss';
import UserLimits from "./UserLimits/UserLimits";
import UserInfo from "./UserInfo/UserInfo";
import useDeviceDetect from "../../../hooks/useDeviceDetect";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Authorized() {
	const {isMobile} = useDeviceDetect()
	
  return (
	  <>
		  <div className={styles.container}>
			  <UserLimits/>
			  {isMobile ? <></> : <UserInfo/>}
		  </div>
		  {isMobile ? <BurgerMenu/> :<></>}
	  </>
  
  );
}

export default Authorized;
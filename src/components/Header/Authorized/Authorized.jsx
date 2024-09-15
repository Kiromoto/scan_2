import React from 'react';
import styles from './Authorized.module.scss';
import UserLimits from "./UserLimits/UserLimits";
import UserInfo from "./UserInfo/UserInfo";

function Authorized() {
	return (
		<>
			<div className={styles.container}>
				<UserLimits/>
				<UserInfo/>
			</div>
		</>
	);
}

export default Authorized;
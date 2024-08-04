import React, {useEffect, useState} from 'react';
import styles from './UserLimits.module.scss';
import Loading from "../../../UI/Loading/Loading";

function UserLimits(props) {
    const InitialState = {
        usedCount: 34,
        limitCount: 100,
    }
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setInterval(() => {
            setIsLoading(false)
        }, 2000);
    }, []);

    return (
        <>
            {
                isLoading
                    ?
                    <div className={styles.container}>
                        <Loading/>
                    </div>
                    :
                    <div className={styles.container}>
                        <div className={styles.usedLimitInfo}>
                            <div className={styles.usedLimitText}>Использовано компаний</div>
                            <div className={styles.usedCount}>{InitialState.usedCount}</div>
                        </div>
                        <div className={styles.usedLimitInfo}>
                            <div className={styles.usedLimitText}>Лимит по компаниям</div>
                            <div className={styles.limitCount}>{InitialState.limitCount}</div>
                        </div>

                    </div>
            }
        </>


    );
}

export default UserLimits;
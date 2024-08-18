import React, {useEffect, useState} from 'react';
import styles from './UserLimits.module.scss';
import Loading from "../../../UI/Loading/Loading";
import axios from "axios";
import {useAuth} from "../../../../hooks/useAuth";

function UserLimits(props) {
    const {accessToken, expire} = useAuth()
    const [InitialState, setInitialState] = useState({
        usedCount: 34,
        limitCount: 100,
    })
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://gateway.scan-interfax.ru/api/v1/account/info',
            { headers:
                    { Authorization: `Bearer ${accessToken}`, expire: expire}, }
            ).then(response => {
                setInitialState({...InitialState,
                    usedCount: response.data.eventFiltersInfo.usedCompanyCount,
                    limitCount: response.data.eventFiltersInfo.companyLimit,
                })
            setIsLoading(false);
        }).catch(err => {console.log('Get account info is ERROR: ', err)})

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
                    // Для получения информации о лимитах пользователя нужно отправить отдельный запрос
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
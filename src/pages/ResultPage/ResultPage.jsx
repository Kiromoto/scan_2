import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import styles from "../ResultPage/ResultPage.module.scss";
import TitleSearch from "../../components/Result/TitleSearch/TitleSearch";
import Histogram from "../../components/Result/Histogram/Histogram";
import Documents from "../../components/Result/Documents/Documents";

function ResultPage() {
    const location = useLocation();
    const searchParams = location?.state?.searchParams || '';

    if (!searchParams) {
        return <Navigate to="/search" replace={true} state={{ from: location }} />
    }

    return (
        <div className={styles.container}>
            <TitleSearch/>
            <Histogram searchParams={searchParams}/>
            <Documents searchParams={searchParams}/>
        </div>

    );
}

export default ResultPage;
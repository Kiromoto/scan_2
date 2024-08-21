import React from 'react';
import {useLocation} from "react-router-dom";
import styles from "../ResultPage/ResultPage.module.scss";
import TitleSearch from "../../components/Result/TitleSearch/TitleSearch";
import Histogram from "../../components/Result/Histogram/Histogram";

function ResultPage() {
    const location = useLocation();
    const searchParams = location?.state?.searchParams || '';
    console.log(location);

    const tempLocationState = () => {
        return (
            <>
                <p>Result page</p>

                {
                    searchParams
                        ?
                        <>
                            <p>inn: {searchParams.inn}</p>
                            <p>tonality: {searchParams.tonality}</p>
                            <p>limit: {searchParams.limit}</p>
                            <p>startDate: {searchParams.startDate}</p>
                            <p>endDate: {searchParams.endDate}</p>
                            <p>maxFullness: {searchParams.maxFullness ? 'true' : 'false'}</p>
                            <p>inBusinessNews: {searchParams.inBusinessNews? 'true' : 'false'}</p>
                            <p>onlyMainRole: {searchParams.onlyMainRole? 'true' : 'false'}</p>
                            <p>onlyWithRiskFactors: {searchParams.onlyWithRiskFactors? 'true' : 'false'}</p>
                            <p>excludeTechNews: {searchParams.excludeTechNews? 'true' : 'false'}</p>
                            <p>excludeAnnouncements: {searchParams.excludeAnnouncements? 'true' : 'false'}</p>
                            <p>excludeDigests: {searchParams.excludeDigests? 'true' : 'false'}</p>
                        </>
                        :
                        <>Нет данных</>
                }
            </>
        )
    }

    return (
        <div className={styles.container}>
            <TitleSearch/>
            <Histogram searchParams={searchParams}/>





            {tempLocationState()}
        </div>

    );
}

export default ResultPage;
import React from 'react';
import {useLocation} from "react-router-dom";

function ResultPage(props) {
    const location = useLocation();
    const searchParams = location?.state?.searchParams || '';
    console.log(location);

    return (
        <div>
            <p>Result page</p>

            {
                searchParams
                    ?
                    <>
                        <p>inn: {searchParams.inn}</p>
                        <p>innError: {searchParams.innError}</p>
                        <p>tonality: {searchParams.tonality}</p>
                        <p>limit: {searchParams.limit}</p>
                        <p>limitError: {searchParams.limitError}</p>
                        <p>startDate: {searchParams.startDate}</p>
                        <p>endDate: {searchParams.endDate}</p>
                    </>
                    :
                    <>Нет данных</>
            }

        </div>
    );
}

export default ResultPage;
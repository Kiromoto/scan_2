import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: null,
    userTariff: null,
    setUserTariff: null,
    accessToken: null,
    setAccessToken: null,
    expire: null,
    setExpire: null,
});

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("isLoggedIn")) : false);
    const [userTariff, setUserTariff] = useState(localStorage.getItem("userTariff") ? JSON.parse(localStorage.getItem("userTariff")) : 1);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken")) : null);
    const [expire, setExpire] = useState(localStorage.getItem("expire") ? JSON.parse(localStorage.getItem("expire")) : null);

    useEffect(() => {
        if(localStorage.getItem("expire")){
            const inMemory = new Date(JSON.parse(localStorage.getItem("expire")))
            const now = new Date();
            // console.log(inMemory, "inMemory < now", now, (inMemory < now))
            if (inMemory < now) {
                localStorage.removeItem("accessToken")
                localStorage.removeItem("expire")
                localStorage.removeItem("isLoggedIn");
                setIsLoggedIn(false)
                setAccessToken(null)
                setExpire(null)
            }
            else
            {
                setExpire(JSON.parse(localStorage.getItem("expire")))

                if(localStorage.getItem("isLoggedIn")){
                    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")))
                }
                if(localStorage.getItem("userTariff")){
                    setUserTariff(parseInt(JSON.parse(localStorage.getItem("userTariff"))))
                }
                if(localStorage.getItem("accessToken")){
                    setAccessToken(JSON.parse(localStorage.getItem("accessToken")))
                }
            }

        }

    }, [])

    useEffect(() => {
        if(localStorage.getItem("isLoggedIn")){
            localStorage.removeItem("isLoggedIn")
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        } else {
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        }
    }, [isLoggedIn])

    useEffect(() => {
        if(localStorage.getItem("userTariff")){
            localStorage.removeItem("userTariff")
            localStorage.setItem("userTariff", JSON.stringify(userTariff));
        } else {
            localStorage.setItem("userTariff", JSON.stringify(userTariff));
        }
    }, [userTariff])

    useEffect(() => {
        if(localStorage.getItem("accessToken")){
            localStorage.removeItem("accessToken")
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
        } else {
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
        }

        if(localStorage.getItem("expire")){
            localStorage.removeItem("expire")
            localStorage.setItem("expire", JSON.stringify(expire));
        } else {
            localStorage.setItem("expire", JSON.stringify(expire));
        }
    }, [accessToken, expire])



    return <AuthContext.Provider value={
        {
            isLoggedIn,
            setIsLoggedIn,
            userTariff,
            setUserTariff,
            accessToken,
            setAccessToken,
            expire,
            setExpire,
        }
    }>
        {children}
    </AuthContext.Provider>
}
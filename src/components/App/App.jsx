import {Route, Routes} from "react-router-dom";
import Layout from "../../pages/Layout";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import ResultPage from "../../pages/ResultPage/ResultPage";
import RequireAuth from "../../hoc/RequireAuth";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="search" element={<RequireAuth> <SearchPage/> </RequireAuth>}/>
                <Route path="result" element={<RequireAuth> <ResultPage/> </RequireAuth>}/>
                {/*<Route path="result/:id" element={<RequireAuth> <OnePostPage/> </RequireAuth>}/>*/}
                <Route path="*" element={<MainPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;

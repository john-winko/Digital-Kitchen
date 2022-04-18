import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import Signup from "./pages/Signup";
import {AuthProvider, RequireAuth} from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserHome from "./pages/UserHome";
import ComingSoon from "./pages/ComingSoon";


function App() {

    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                        <Route path={"/signup"} element={<Signup />}/>
                        <Route path={"/coming_soon"} element={<ComingSoon />} />
                        <Route element={<RequireAuth />}>
                            <Route path={"/home"} element={<UserHome />} />
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import Signup from "./pages/Signup";
import {AuthProvider, RequireAuth} from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ComingSoon from "./pages/ComingSoon";
import Keywords from "./pages/Keywords";
import RecipeList from "./pages/RecipeList";
import {MyCollectionProvider} from "./context/MyCollection";
import MealPlanning from "./pages/MealPlanning";
import SingleRecipe from "./pages/SingleRecipe";
import AddBlogRecipe from "./pages/AddBlogRecipe";


function App() {

    return (
        <div className="App">
            <AuthProvider><MyCollectionProvider>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/coming_soon"} element={<ComingSoon/>}/>
                        <Route element={<RequireAuth/>}>
                            <Route path={"/add_blog_recipe"} element={<AddBlogRecipe/>}/>
                            <Route path={"/recipe/:id"} element={<SingleRecipe/>}/>
                            <Route path={"/recipe_list/favorites"} element={<RecipeList favoritesOnly/>}/>
                            <Route path={"/meal_planning"} element={<MealPlanning/>}/>
                            <Route path={"/recipe_list"}>
                                <Route path={":query"} element={<RecipeList />} />
                                <Route index element={<RecipeList />} />
                            </Route>
                            <Route path={"/keywords"} element={<Keywords/>}/>
                        </Route>
                    </Route>
                </Routes>
            </MyCollectionProvider></AuthProvider>
        </div>
    );
}

export default App;
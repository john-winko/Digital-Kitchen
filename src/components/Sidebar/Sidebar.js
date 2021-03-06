import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {MyCollectionContext} from "../../context/MyCollection";
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import CollectionsIcon from '@mui/icons-material/Collections';
import ShopIcon from '@mui/icons-material/Shop';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FlatwareIcon from '@mui/icons-material/Flatware';
import HandymanIcon from '@mui/icons-material/Handyman';
import MenuBookIcon from '@mui/icons-material/MenuBook';

///////////////////////////
// https://codesandbox.io/s/9bbm9?file=/src/Aside.js
//////////////////////////
export default function Sidebar() {
    let {myRecipes} = useContext(MyCollectionContext)
    let backgroundImg = "https://images.unsplash.com/photo-1433704579980-63267d3ed68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"

    const [top5, setTop5] = useState([])

    useEffect(() => {
        setTop5(myRecipes.slice(-5))
    }, [myRecipes])

    return (
        <ProSidebar image={backgroundImg}>

            <SidebarHeader>
                <div>My Dashboard</div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <SubMenu suffix={<span>({myRecipes.length})</span>}
                             title="My Collection"
                             icon={<FavoriteIcon/>}>
                        <MenuItem icon={<FlatwareIcon/>}>
                            <Link to={"/recipe_list/favorites"}>View Recipes</Link>
                        </MenuItem>
                        <SubMenu title="Recent Favorites" icon={<FilterAltIcon/>}>
                            {top5.map((element) => {
                                return (
                                    <MenuItem key={element.id}>
                                        <Link to={`/recipe/${element.id}`}>{element.recipe.name}</Link>
                                    </MenuItem>
                                )
                            })}
                        </SubMenu>
                    </SubMenu>
                </Menu>

                <Menu iconShape={"circle"}>
                    <MenuItem icon={<MenuBookIcon/>}>
                        <Link to={"/recipe_list"}>Browse Recipes</Link>
                    </MenuItem>
                </Menu>

                <Menu iconShape={"circle"}>
                    <MenuItem icon={<DownloadIcon/>}>
                        <Link to={"/add_blog_recipe"}>Import from URL</Link>
                    </MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <MenuItem icon={<CollectionsIcon/>}>
                        <Link to={"/keywords"}>Keyword settings</Link>
                    </MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <MenuItem icon={<HandymanIcon/>}>
                        <Link to={"/meal_planning"}>Meal Planning</Link>
                    </MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <MenuItem icon={<ShopIcon/>}>
                        <Link to={"/coming_soon"}>Shopping List</Link>
                    </MenuItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{textAlign: "center"}}>
                <div style={{padding: "20px 24px"}}>
                    <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                        <span> 'Support Us'</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

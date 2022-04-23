import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthProvider";
import {Link} from "react-router-dom";
import {MyCollectionContext} from "../../context/MyCollection";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'
import AnchorIcon from '@mui/icons-material/Anchor';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ShopIcon from '@mui/icons-material/Shop';
import {Form} from "react-bootstrap";
import {IconButton, InputBase, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


///////////////////////////
// https://codesandbox.io/s/9bbm9?file=/src/Aside.js
//////////////////////////
export default function Sidebar() {
    const {token} = useContext(AuthContext)
    let {myRecipes} = useContext(MyCollectionContext)
    let backgroundImg = "https://images.unsplash.com/photo-1433704579980-63267d3ed68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"

    const [top5, setTop5] = useState([])

    const search = (e) => {
        e.preventDefault()
        console.log("searched", e)
    }

    useEffect(() => {
        setTop5(myRecipes.slice(0, 5))
    }, [myRecipes])
    return (
        <ProSidebar style={{visibility: token ? "visible" : "hidden"}} image={backgroundImg}>

            <SidebarHeader>
                <div>My Dashboard</div>
            </SidebarHeader>

            <SidebarContent>

                <Menu iconShape="circle">
                    <SubMenu suffix={<span>({myRecipes.length})</span>} title="My Collection" icon={<AnchorIcon/>}>
                        <MenuItem icon={<AnchorIcon/>}><Link to={"/recipe_list/favorites"}>View Recipes</Link></MenuItem>
                        <SubMenu title="Recent Favorites" icon={<AnchorIcon/>}>
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
                    <MenuItem icon={<AnchorIcon/>}><Link to={"/recipe_list"}>Browse Recipes</Link></MenuItem>
                </Menu>
                <Menu iconShape={"circle"}>
                    <SubMenu title="Add Recipe" icon={<SettingsIcon/>}>
                        <MenuItem icon={<AnchorIcon/>}><Link to={"/"}>Manual</Link></MenuItem>
<MenuItem icon={<AnchorIcon/>}><Link to={"/add_blog_recipe"}>From blog/website</Link></MenuItem>
                    </SubMenu>

                </Menu>
                <Menu iconShape="circle">
                    <SubMenu title="Preferences" icon={<SettingsIcon/>}>
                        <MenuItem icon={<CollectionsIcon/>}>
                            <Link to={"/keywords"}>Keyword settings</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<AnchorIcon/>}>
                        <Link to={"/meal_planning"}>Meal Planning</Link>
                    </MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <MenuItem icon={<ShopIcon/>}>
                        <Link to={"/"}>Shopping List</Link>
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

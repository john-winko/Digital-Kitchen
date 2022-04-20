import {useContext, useState} from "react";
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

///////////////////////////
// https://codesandbox.io/s/9bbm9?file=/src/Aside.js
//////////////////////////
export default function Sidebar() {
    const {token} = useContext(AuthContext)
    let {myRecipes} = useContext(MyCollectionContext)
    let backgroundImg = "https://images.unsplash.com/photo-1433704579980-63267d3ed68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"

    return (
        <ProSidebar style={{visibility: token ? "visible" : "hidden"}} image={backgroundImg}>

            <SidebarHeader>
                <div>My Dashboard</div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <SubMenu title="Preferences" icon={<SettingsIcon/>} >
                        <MenuItem icon={<CollectionsIcon/>}>
                            <Link to={"/keywords"}>Keyword settings</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<ShopIcon/>}>
                        <Link to={"/"}>Shopping List</Link>
                    </MenuItem>

                </Menu>
                <Menu iconShape="circle">
                    <SubMenu title="Meal Planning" icon={<AnchorIcon/>}>
                        <MenuItem>Daily</MenuItem>
                        <MenuItem>Weekly</MenuItem>
                        <MenuItem>Monthly</MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu suffix={<span>(34)</span>}  title="My Favorites"  icon={<AnchorIcon/>}>
                        {/*TODO add in a map to the recipes in usecontext for top ~5*/}
                        <MenuItem>'submenu' 1</MenuItem>
                        <MenuItem>'submenu' 2</MenuItem>
                        <MenuItem>'submenu' 3</MenuItem>
                    </SubMenu>

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

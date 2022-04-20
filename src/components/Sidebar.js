import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Link} from "react-router-dom";
import {MyCollectionContext} from "../context/MyCollection";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'
import AnchorIcon from '@mui/icons-material/Anchor';


export default function Sidebar() {
    const {token} = useContext(AuthContext)

    let barStyle = {
        maxHeight:"100vh",
        minHeight:"100vh",
        position:"fixed",
        width:"200px",
        visibility: token? "visible": "hidden"
    }

    return (
        <ProSidebar style={barStyle}
                    image={'https://images.unsplash.com/photo-1433704579980-63267d3ed68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}
            // rtl={rtl}
            // collapsed={collapsed}
            // toggled={toggled}
            // breakPoint="md"
            // onToggle={handleToggleSidebar}
        >
            <SidebarHeader >
                <div
                    style={{
                        padding: "24px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: 14,
                        letterSpacing: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}
                >
                    'sidebarTitle'
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<AnchorIcon/>}
                        suffix={<span className="badge red">'new'</span>}
                    >
                        'dashboard'
                    </MenuItem>
                    <MenuItem icon={<AnchorIcon/>}> 'components'</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="withSuffix"
                        icon={<AnchorIcon/>}
                    >
                        <MenuItem>'submenu' 1</MenuItem>
                        <MenuItem>'submenu' 2</MenuItem>
                        <MenuItem>'submenu' 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        title="withPrefix"
                        icon={<AnchorIcon/>}
                    >
                        <MenuItem>'submenu' 1</MenuItem>
                        <MenuItem>'submenu' 2</MenuItem>
                        <MenuItem>'submenu' 3</MenuItem>
                    </SubMenu>
                    <SubMenu title="multiLevel" icon={<AnchorIcon/>}>
                        <MenuItem>'submenu' 1 </MenuItem>
                        <MenuItem>'submenu' 2 </MenuItem>
                        <SubMenu title={`'submenu' 3`}>
                            <MenuItem>'submenu' 3.1 </MenuItem>
                            <MenuItem>'submenu' 3.2 </MenuItem>
                            <SubMenu title={`'submenu' 3.3`}>
                                <MenuItem>'submenu' 3.3.1 </MenuItem>
                                <MenuItem>'submenu' 3.3.2 </MenuItem>
                                <MenuItem>'submenu' 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{textAlign: "center"}}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: "20px 24px"
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <AnchorIcon/>
                        <span> 'viewSource'</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}
// export default function Sidebar() {
//     let auth = useContext(AuthContext)
//     let {myRecipes} = useContext(MyCollectionContext)
//     const [expanded, setExpanded] = useState(true)
//
//     let barStyle = {
//         backgroundColor: "lightblue",
//         borderRadius: "2rem",
//         padding: ".5rem",
//         margin: ".5rem"
//     }
//     if (expanded){
//         barStyle = {...barStyle, minWidth: "20vw"}
//     }else{
//         barStyle = {...barStyle, maxWidth: "2vw"}
//     }
//
//     if (!auth.token)
//         return <></>
//
//     return (
//         <div style={barStyle}>
//             <button onClick={()=>setExpanded((isExpanded)=>!isExpanded)}>...</button>
//             <ul>Sett
//                 <ul>Preferences
//                     <li><Link to={"/keywords"}>Keyword (blacklist)</Link></li>
//                 </ul>
//                 <li>----------</li>
//                 <ul>Meal Planning
//                     <li>Weekly</li>
//                     <li>Monthly</li>
//                 </ul>
//                 <li>----------</li>
//                 <li>Shopping list</li>
//                 <ul>My Collection
//                     {console.log(myRecipes)}
//                     {myRecipes.map((recipe)=>{
//                         return <li key={recipe.id}>{recipe.recipe.name}</li>
//                     })}
//                 </ul>
//             </ul>
//         </div>
//
//
//     )
// }
import React from 'react'
import { Icon } from '@iconify/react';
import btcIcon from '@iconify/icons-cryptocurrency/btc';
import adminHome from '@iconify/icons-dashicons/admin-home';
import dashboardIcon from '@iconify/icons-dashicons/dashboard';
import accountGroup from '@iconify/icons-mdi/account-group';
import analyticsIcon from '@iconify/icons-carbon/analytics';
import businesspersonIcon from '@iconify/icons-dashicons/businessperson';
import userEditFill from '@iconify/icons-mingcute/user-edit-fill';
import logoutOutlined from '@iconify/icons-ant-design/logout-outlined';
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/responsiveness.css'
import '../styles/sidebar.css'

export default function Sidebar({ currentRoute, setCurrentRoute }) {
    const allRoutes = [
        {
            icon: dashboardIcon,
            route: "Dashboard",
            index: 1,
        },
        {
            icon: accountGroup,
            route: "Connected Accounts",
            index: 2,
        },
        {
            icon: analyticsIcon,
            route: "Analytics",
            index: 3,
        },
        {
            icon: businesspersonIcon,
            route: "Profile",
            index: 4,
        },
        {
            icon: userEditFill,
            route: "Edit profile",
            index: 5,
        },
        // {
        //     icon: btcIcon,
        //     route: "Logout",
        //     index: 6,
        // }
    ]
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar-1">
                    <span
                        className="sidebar-link1"
                        style={{ backgroundColor: "transparent" }}>
                        <a href="/" style={{ display: "flex", alignItems: "center" }}><Icon icon={adminHome} style={{ marginRight: "4px" }} />
                            <span>Home</span></a>
                    </span>
                    {
                        allRoutes.map((route, index) => {
                            return (
                                <span key={index}
                                    className="sidebar-link1" onClick={() => setCurrentRoute(route.index)}
                                    style={{ backgroundColor: currentRoute === route.index ? "#00245a" : "transparent" }}>
                                    <Icon icon={route.icon} style={{ marginRight: "4px" }} />
                                    <span>{route.route}</span>
                                </span>
                            )
                        })
                    }
                    <span
                        className="sidebar-link1"
                        style={{ color: "red" }}
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("userid");
                            localStorage.removeItem("userData");
                            window.location.href = "/"
                        }}
                        >
                        <a href="/" style={{ display: "flex", alignItems: "center" }}><Icon icon={logoutOutlined} style={{ marginRight: "4px" }} />
                            <span>Logout</span></a>
                    </span>
                    {/* <a href=""className="sidebar-link2" onClick={()=>setCurrentRoute(2)} style={{color: currentRoute === 2 ? "red" : "black"}}><span>Connected Accounts</span></a>
                    <a href=""className="sidebar-link3"><span>Analytics</span></a>
                    <a href=""className="sidebar-link4"><span>Profile</span></a>
                    <a href=""className="sidebar-link5"><span>Edit profile</span></a>
                    <a href=""className="sidebar-link6"><span>Log out</span></a>
                    <a href=""className="sidebar-link7"><span>Alert</span></a> */}
                </div>
            </div>
        </div>
    )
}

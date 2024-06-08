import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.png'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Docteurs",
            name:"Docteurs",
            icon:<FaUserAlt/>
        },
        {
            path:"/Specialite",
            name:"Specialite",
            icon:<FaRegChartBar/>
        },
        {
            path:"/utlisateur",
            name:"Utlisateur",
            icon:<FaTh/>
        },
        {
            path:"/ParametreA",
            name:"Paramètre",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={logo} style={{width:'50px' , height:'50px'}}></img></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
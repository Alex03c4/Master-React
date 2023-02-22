import React from "react";
import avatar from '../../../assets/img/user.png'
export const Nav = () => {
    return (
        <nav className="navbar__container-lists">
            <ul className="container-lists__menu-list">
                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Login</span>
                    </a>
                </li>  
                <li className="menu-list__item">
                    <a href="#" className="menu-list__link">
                        <i className="fa-solid fa-users"></i>
                        <span className="menu-list__title">Registro</span>
                    </a>
                </li>               
            </ul>            
        </nav>
    );
};

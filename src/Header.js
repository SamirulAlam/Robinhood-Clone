import React from 'react';
import "./Header.css";
import Logo from "./robinhood.svg";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={Logo} width={25} alt=""/>
            </div>
            <div className="header__search">
                <div className="header__searchContainer">
                    <SearchOutlined  />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header

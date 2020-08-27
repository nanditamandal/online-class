import React from 'react';
import './Header.css';
import logo from '../../images/picture.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" style={{width:"500px"}}/>
           
        </div>
    );
};

export default Header;
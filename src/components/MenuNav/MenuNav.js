import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import React from 'react';

class MenuNav extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu right>
        <Link className="navLink" to="/home">
          Home
        </Link>

        <Link className="navLink" to="/portfolio">
          Portfolio
        </Link>

        <Link className="navLink" to="/learn">
          Learn
        </Link>

        <Link className="navLink" to="/contact">
          Contact
        </Link>

        {/* <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <Link className="navLink" to="/contact">
                Login / Register
        </Link> */}
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default MenuNav;
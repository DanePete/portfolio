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

        {/* <Link className="navLink" to="/portfolio">
          Portfolio
        </Link>

        <Link className="navLink" to="/learn">
          Learn
        </Link> */}

        <Link className="navLink" to="/contact">
          Contact
        </Link>

        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="dane-petersen" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/dane-petersen?trk=profile-badge"></a></div>

      </Menu>
    );
  }
}

export default MenuNav;
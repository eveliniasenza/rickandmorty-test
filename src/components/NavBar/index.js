import React from 'react';
import classnames from 'classnames';
import styles from './NavBar.module.css';

const Navbar = () => {

  return(
    <div className={styles.navbar}>
      <a href="/" className="nav-item nav-link ml-4">All Characters</a>
      <a href="/?item=episodes" className="nav-item nav-link ml-4">All Episodes</a>
      <a href="/?item=locations" className="nav-item nav-link ml-4">All Locations</a>
    </div>
  )
}

export default Navbar;

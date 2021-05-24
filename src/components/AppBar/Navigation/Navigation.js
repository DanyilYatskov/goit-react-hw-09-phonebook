import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../../redux/authentication/authSelectors';
import routes from '../../../routes';
import styles from './navigation.module.scss';

const Navigation = () => {
  const LoggedIn = useSelector(authSelectors.getIfLoggedIn);

  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to={routes.homePage}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
      >
        Home
      </NavLink>
      {LoggedIn && (
        <NavLink
          to={routes.contactsPage}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

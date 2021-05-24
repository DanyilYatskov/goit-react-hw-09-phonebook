import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav/';
import { authSelectors } from '../../redux/authentication';
import styles from './appBar.module.scss';

const AppBar = () => {
  const loggedIn = useSelector(authSelectors.getIfLoggedIn);

  return (
    <header className={styles.appBar}>
      <div className={styles.container}>
        <Navigation />
        {loggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;

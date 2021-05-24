import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/authentication';
import Button from '../../Button';
import defaultAvatar from './dog.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    color: '#ff6b08',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="48" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button name="Logout" type="button" handleOnClick={onLogout} />
    </div>
  );
};

export default UserMenu;

// const mapStateToProps = state => ({
//   name: authSelectors.getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

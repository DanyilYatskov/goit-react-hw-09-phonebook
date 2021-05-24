import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import styles from './filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(contactsActions.changeFilter(event.target.value));
  const value = useSelector(contactsSelectors.getContactsFilter);

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
// const mapStateToProps = state => ({
//   value: contactsSelectors.getContactsFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func,
// };

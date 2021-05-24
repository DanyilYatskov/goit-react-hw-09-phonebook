import React from 'react';
import { useSelector } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import ContactListItem from './ContactListItem';
import styles from './contactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contactName={contact.name}
          contactNumber={contact.number}
          contactId={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getFilteredContacts(state),
// });

// export default connect(mapStateToProps, null)(ContactList);

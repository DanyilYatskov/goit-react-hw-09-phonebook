import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import Input from './Input/';
import Button from '../Button';
import styles from './form.module.scss';

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name.toLowerCase()) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        console.warn('Non-existent field type');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(contactsOperations.addNewContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        inputName="Name"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={name}
        inputId={nameInputId}
        handleChange={handleChange}
      />
      <Input
        inputName="Number"
        type="tel"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        value={number}
        inputId={numberInputId}
        handleChange={handleChange}
      />
      <Button
        name="Add Contact"
        type="Submit"
        padding="8px 16px"
        font-size="18px"
      />
    </form>
  );
}
// class Form extends Component {
//   static defaultProps = {
//     name: '',
//     number: '',
//   };

//   state = {
//     name: this.props.name,
//     number: this.props.number,
//   };

//   nameInputId = uuidv4();
//   numberInputId = uuidv4();

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name.toLowerCase()]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.handleSubmit}>
//         <Input
//           inputName="Name"
//           type="text"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           value={name}
//           inputId={this.nameInputId}
//           handleChange={this.handleChange}
//         />
//         <Input
//           inputName="Number"
//           type="tel"
//           pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//           title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//           value={number}
//           inputId={this.numberInputId}
//           handleChange={this.handleChange}
//         />

//         <Button
//           name="Add Contact"
//           type="Submit"
//           padding="8px 16px"
//           font-size="18px"
//         />
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(contactsOperations.addNewContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(Form);

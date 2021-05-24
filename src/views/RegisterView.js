import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/authentication';
import Button from '../components/Button';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  input: {
    display: 'inline-block',
    width: '100%',
    font: 'inherit',
    outline: 'none',
    paddingLeft: '4px',
    paddingRight: '4px',
    backgroundColor: '#333333',
    color: '#a9a9a9',
  },
};
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      default:
        console.warn('Non-existent field type');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    dispatch(authOperations.register(payload));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          E-mail
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button name="Register" type="submit" />
      </form>
    </div>
  );
}
// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1>Registration page</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Name
//             <input
//               style={styles.input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             E-mail
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Password
//             <input
//               style={styles.input}
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button name="Register" type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);

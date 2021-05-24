import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { authOperations } from '../redux/authentication';

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
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };
    dispatch(authOperations.logIn(payload));

    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
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

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="nope">
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
        <Button name="Login" type="submit" />
      </form>
    </div>
  );
}
// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1>Login Page</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="nope"
//         >
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
//           <Button name="Login" type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);

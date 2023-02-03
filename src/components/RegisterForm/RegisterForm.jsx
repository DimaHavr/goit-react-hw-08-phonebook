import Box from 'components/Box';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import {
  FormContainer,
  FormInput,
  FormButton,
  ShowPasswordContainer,
  ShowPasswordButton,
  EyeIcon,
  EyeOffIcon,
} from './RegisterForm.styled';
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (confirmPassword !== password) {
      Notify.failure('Passwords are different, check them and try again...');
      return;
    }

    console.log('Register Form - Username: ', username);
    console.log('Register Form - Email: ', email);

    Notify.success(`Hello, ${username}!`);
    resetForm(event);
  };

  const resetForm = event => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    event.target.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <FormInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            required
          />
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </Box>
        <ShowPasswordContainer>
          <FormInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
          <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </ShowPasswordButton>
        </ShowPasswordContainer>
        <ShowPasswordContainer>
          <FormInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
          <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </ShowPasswordButton>
        </ShowPasswordContainer>
        <FormButton type="submit">Register</FormButton>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;

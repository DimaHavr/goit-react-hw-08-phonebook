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
} from './LoginForm.styled';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Username: ', username);
    console.log('Password: ', password);
    Notify.success(`Hello, ${username}!`);
    resetForm(event);
  };

  const resetForm = event => {
    setUsername('');
    setPassword('');
    event.target.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
        />
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
        <FormButton type="submit">Login</FormButton>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

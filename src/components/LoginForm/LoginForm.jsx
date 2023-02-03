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
  InputContainer,
} from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('email: ', email);
    console.log('Password: ', password);
    Notify.success(`Hello, ${email}!`);
    resetForm(event);
  };

  const resetForm = event => {
    setEmail('');
    setPassword('');
    event.target.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </InputContainer>
        <ShowPasswordContainer>
          <InputContainer>
            <FormInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
            />
          </InputContainer>
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

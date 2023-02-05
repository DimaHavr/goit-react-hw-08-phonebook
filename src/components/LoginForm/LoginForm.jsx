import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormContainer,
  FormInput,
  FormButton,
  ShowPasswordContainer,
  ShowPasswordButton,
  EyeIcon,
  EyeOffIcon,
  EmailIcon,
  PassIcon,
  InputContainer,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
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
          <EmailIcon />
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </InputContainer>
        <ShowPasswordContainer>
          <PassIcon />
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
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </ShowPasswordButton>
        </ShowPasswordContainer>
        <FormButton type="submit">Login</FormButton>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

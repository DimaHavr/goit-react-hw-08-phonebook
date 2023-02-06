import Box from 'components/Box';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  FormContainer,
  FormInput,
  FormButton,
  ShowPasswordContainer,
  ShowPasswordButton,
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  EmailIcon,
  PassIcon,
  PassItemIcon,
  InputContainer,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
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
    dispatch(register({ name, email, password }));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <InputContainer>
            <UserIcon />
            <FormInput
              type="text"
              placeholder="Name"
              value={name}
              onChange={event => setName(event.target.value)}
              required
              maxLength="15"
            />
          </InputContainer>
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
        </Box>
        <ShowPasswordContainer>
          <InputContainer>
            <PassItemIcon />
            <FormInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              minLength="8"
            />
          </InputContainer>
          <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </ShowPasswordButton>
        </ShowPasswordContainer>
        <ShowPasswordContainer>
          <PassIcon />
          <FormInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
          <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </ShowPasswordButton>
        </ShowPasswordContainer>
        <FormButton type="submit">Register</FormButton>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;

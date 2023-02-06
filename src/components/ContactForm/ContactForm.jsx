import Box from '../Box';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';
import {
  FormBox,
  FormInput,
  Button,
  PhoneIcon,
  UserIcon,
  InputContainer,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const checkUserName = contacts
    .map(({ name }) => name.toLocaleLowerCase())
    .some(item => item === name.toLocaleLowerCase());

  const resetForm = event => {
    setName('');
    setNumber('');
    event.target.reset();
  };

  const onSubmitForm = event => {
    event.preventDefault();

    if (checkUserName) {
      setName('');
      Notify.failure(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ name, number }));
      resetForm(event);
      Notify.success(`${name} is added in contacts!`);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
      marginTop="20px"
    >
      <FormBox onSubmit={onSubmitForm}>
        <InputContainer>
          <UserIcon />
          <FormInput
            value={name}
            placeholder="Name"
            type="text"
            name="name"
            maxLength="20"
            required
            onChange={onChangeInput}
          />
        </InputContainer>
        <InputContainer>
          <PhoneIcon />
          <FormInput
            value={number}
            placeholder="Phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            maxLength="15"
            required
            onChange={onChangeInput}
          />
        </InputContainer>
        <Button type="submit">Add Contact</Button>
      </FormBox>
    </Box>
  );
};

export default ContactForm;

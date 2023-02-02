import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormBox, FormLabel, Button } from './Form.styled';
import Box from '../Box';
import { addContact } from '../../redux/operation';
import { getContacts } from '../../redux/contactsSlice';

const Form = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
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

  const onSubmitForm = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      setName('');
      Notify.failure(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ name, number }));
      resetForm(event);
      Notify.success(`${name} is added in contacts!`);
    }
  };

  const resetForm = event => {
    setName('');
    setNumber('');
    event.target.reset();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
      marginBottom="10px"
    >
      <FormBox onSubmit={onSubmitForm}>
        <FormLabel>
          Name
          <input
            value={name}
            type="text"
            name="name"
            maxLength="20"
            required
            onChange={onChangeInput}
          />
        </FormLabel>
        <FormLabel>
          Number
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            maxLength="15"
            required
            onChange={onChangeInput}
          />
        </FormLabel>
        <Button type="submit">Add Contact</Button>
      </FormBox>
    </Box>
  );
};

export default Form;

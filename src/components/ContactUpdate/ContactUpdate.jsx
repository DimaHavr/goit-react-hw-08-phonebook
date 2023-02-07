import Box from '../Box';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { updateContact } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';
import {
  FormBox,
  FormInput,
  Button,
  PhoneIcon,
  UserIcon,
  InputContainer,
} from './ContactUpdate.styled';

const ContactUpdate = ({
  selectedName,
  selectedNumber,
  selectedId,
  onToggleModal,
}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const [name, setName] = useState(selectedName);
  const [number, setNumber] = useState(selectedNumber);

  const checkUserName = contacts
    .map(({ name }) => name.toLocaleLowerCase())
    .some(item => item === name.toLocaleLowerCase());
  const checkUserNumber = contacts
    .map(({ number }) => number)
    .some(item => item === number);

  const onSubmitForm = event => {
    event.preventDefault();
    if (checkUserName && checkUserNumber) {
      Notify.failure(`${name} is already in contacts...`);
    } else {
      dispatch(updateContact({ id: selectedId, name: name, number: number }));
      Notify.success(`Сontact has been updated!`);
      onToggleModal();
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
            onChange={e => setName(e.target.value)}
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
            onChange={e => setNumber(e.target.value)}
          />
        </InputContainer>
        <Button type="submit">Update Contact</Button>
      </FormBox>
    </Box>
  );
};

export default ContactUpdate;

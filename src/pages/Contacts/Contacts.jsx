import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { fetchContacts } from '../../redux/contacts/operation';
import Form from '../../components/Form';
import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';
import Box from 'components/Box';
import { ContactsContainer } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="section">
      <ContactsContainer>
        <Form />
        {contacts.length > 0 && (
          <>
            <ContactFilter />
            <ContactList />
          </>
        )}
      </ContactsContainer>
    </Box>
  );
};

export default Contacts;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/operation';

import Form from '../../components/Form';
import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';
import Box from 'components/Box';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Form />

      {contacts.length > 0 && (
        <>
          <ContactFilter />
          <ContactList />
        </>
      )}
    </Box>
  );
};

export default Contacts;

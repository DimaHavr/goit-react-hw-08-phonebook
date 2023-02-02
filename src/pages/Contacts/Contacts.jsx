import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import { fetchContacts } from '../../redux/operation';

import Form from '../../components/Form';
import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';
import Box from 'components/Box';

const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

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
          <ContactList contactsArray={getAddedContacts()} />
        </>
      )}
    </Box>
  );
};

export default Contacts;

import { useEffect } from 'react';
import { ContactsContainer } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import Box from 'components/Box';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';
import Loader from 'components/Loader';

const Contacts = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="section">
      <ContactsContainer>
        <ContactForm />
        {contacts.length === 0 && (
          <>
            <ContactFilter />
            {isLoading && <Loader />}
            <ContactList />
          </>
        )}
      </ContactsContainer>
    </Box>
  );
};

export default Contacts;

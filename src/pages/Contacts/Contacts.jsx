import { useEffect } from 'react';
import { ContactsContainer } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';
import Box from 'components/Box';
import Loader from 'components/Loader';

const Contacts = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  console.log(contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="section">
      <ContactsContainer>
        <ContactForm />
        {isLoading && <Loader />}
        {Boolean(contacts.length) && (
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

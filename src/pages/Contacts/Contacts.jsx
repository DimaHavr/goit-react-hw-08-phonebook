import { useEffect } from 'react';
import {
  ContactsContainer,
  Glitch,
  GlitchWrapper,
  Keyframes,
} from './Contacts.styled';
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
        <GlitchWrapper>
          <Glitch data-glitch="Contacts:">Contacts:</Glitch>
          <Keyframes />
        </GlitchWrapper>

        <ContactFilter />
        {isLoading && <Loader />}
        {Boolean(contacts.length) && <ContactList />}
      </ContactsContainer>
    </Box>
  );
};

export default Contacts;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm';
import ContactFilter from '../../components/ContactFilter';
import ContactList from '../../components/ContactList';
import Loader from 'components/Loader';
import Box from 'components/Box';
import {
  ContactsContainer,
  Glitch,
  GlitchWrapper,
  Keyframes,
  TextLink,
  CopyIcon,
} from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
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
      <Box
        as="div"
        display="flex"
        alignItems="center"
        marginTop="auto"
        paddingBottom="10px"
      >
        <CopyIcon />
        <TextLink href="https://github.com/DimaHavr">DimaHavr</TextLink>
      </Box>
    </Box>
  );
};

export default Contacts;

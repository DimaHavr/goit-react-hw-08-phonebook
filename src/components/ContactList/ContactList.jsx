import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { getFilter } from '../../redux/filter/filterSlice';
import { List } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  return (
    <List>
      {getAddedContacts().map(({ name, number, id }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};

export default ContactList;

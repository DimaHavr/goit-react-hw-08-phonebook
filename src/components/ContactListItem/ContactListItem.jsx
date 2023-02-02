import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from 'redux/operation';
import {
  Item,
  Button,
  Text,
  TextItem,
  DeleteIcon,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>
        {name}: <TextItem>{number}</TextItem>
      </Text>
      <Button
        onClick={() => {
          Notify.info('Сontact deleted!');
          return dispatch(deleteContact(id));
        }}
        type="button"
      >
        <DeleteIcon />
      </Button>
    </Item>
  );
};

export default ContactListItem;

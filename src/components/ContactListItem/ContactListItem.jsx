import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from '../../redux/contacts/operations';
import {
  Item,
  Button,
  Text,
  TextItem,
  DeleteIcon,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  return (
    <Item isVisible={isVisible}>
      <Text>
        {name}: <TextItem>{number}</TextItem>
      </Text>
      <Button
        onClick={() => {
          Notify.info('Сontact deleted!');
          setIsVisible(false);
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

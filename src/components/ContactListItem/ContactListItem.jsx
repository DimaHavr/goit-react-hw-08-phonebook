import { useState } from 'react';
import Box from 'components/Box';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import ContactUpdateModal from 'components/ContactUpdateModal';
import {
  Item,
  Button,
  Text,
  TextItem,
  DeleteIcon,
  UpdateIcon,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Item isVisible={isVisible}>
        <Text>
          {name}: <TextItem>{number}</TextItem>
        </Text>
        <Box display="flex" gridGap="10px">
          <Button type="button" onClick={() => onToggleModal()}>
            <UpdateIcon />
          </Button>
          <Button
            disabled={!isVisible}
            onClick={() => {
              Notify.info('Сontact deleted!');
              setIsVisible(false);
              return dispatch(deleteContact(id));
            }}
            type="button"
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Item>
      {showModal && (
        <ContactUpdateModal
          onToggleModal={onToggleModal}
          selectedName={name}
          selectedNumber={number}
          selectedId={id}
        />
      )}
    </>
  );
};

export default ContactListItem;

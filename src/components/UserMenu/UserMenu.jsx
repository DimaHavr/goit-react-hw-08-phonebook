import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Button, Container, Text, LogOutIcon } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <Container>
      <Text>{userName.name}</Text>
      <Button onClick={() => dispatch(logOut())}>
        <LogOutIcon />
      </Button>
    </Container>
  );
};

export default UserMenu;

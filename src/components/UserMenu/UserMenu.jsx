import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Container, Text, LogOutIcon } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>mango</Text>
      <Button onClick={() => dispatch(logOut())}>
        <LogOutIcon />
      </Button>
    </Container>
  );
};

export default UserMenu;

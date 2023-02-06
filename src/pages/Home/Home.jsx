import Box from 'components/Box';
import {
  LinkItem,
  GlitchWrapper,
  Glitch,
  Keyframes,
  Text,
  TextLink,
  CopyIcon,
} from './Home.styled';
const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <GlitchWrapper>
        <Glitch data-glitch="PhoneBook">PhoneBook</Glitch>
        <Keyframes />
      </GlitchWrapper>
      <Text>
        A contact book is an essential tool for keeping track of personal and
        professional connections. With an online platform, you can register and
        create a profile to store your name and phone number, making it easily
        accessible from any device with internet access. This centralized
        location provides a convenient way to organize and manage your contacts,
        allowing you to search, view, and update your information with ease.
        Whether for personal use or for managing a large network, a contact book
        is an effective solution for staying connected.
      </Text>
      <Box marginTop="20px">
        <LinkItem to="/login">Log in</LinkItem>
        <LinkItem to="/register">Register</LinkItem>
      </Box>
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

export default Home;

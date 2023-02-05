import Box from 'components/Box';
import {
  LinkItem,
  GlitchWrapper,
  Glitch,
  Keyframes,
  Text,
} from './Home.styled';
const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <GlitchWrapper>
        <Glitch data-glitch="PhoneBook">PhoneBook</Glitch>
        <Keyframes />
      </GlitchWrapper>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
        consequatur rerum in perspiciatis, delectus quis suscipit eveniet ipsam
        tempore hic deleniti quam iste aut eaque! Suscipit animi deleniti rem
        dolorum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Beatae consequatur rerum in perspiciatis, delectus quis suscipit eveniet
        ipsam tempore hic deleniti quam iste aut eaque! Suscipit animi deleniti
        rem dolorum.
      </Text>
      <Box>
        <LinkItem to="/login">Log in</LinkItem>
        <LinkItem to="/register">Register</LinkItem>
      </Box>
    </Box>
  );
};

export default Home;

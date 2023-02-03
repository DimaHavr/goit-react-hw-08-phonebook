import Box from 'components/Box';
import { LinkItem } from './Home.styled';
const Home = () => {
  return (
    <div>
      <h1>Phone Book</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
        consequatur rerum in perspiciatis, delectus quis suscipit eveniet ipsam
        tempore hic deleniti quam iste aut eaque! Suscipit animi deleniti rem
        dolorum.
      </p>
      <Box>
        <LinkItem to="/login">Log in</LinkItem>
        <LinkItem to="/register">Register</LinkItem>
      </Box>
    </div>
  );
};

export default Home;

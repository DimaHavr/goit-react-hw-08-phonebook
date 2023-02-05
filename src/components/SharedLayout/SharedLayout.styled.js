import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  background-color: #00000082;
  text-align: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: darkslategrey;
  }

  &.active {
    color: darkslategrey;
    background: linear-gradient(#1b1b1b, #111);
    border: 1px solid #000;
    box-shadow: inset 0 0 0 1px #272727;
    :hover,
    :focus {
      transform: scale(1.05);
    }
  }
`;

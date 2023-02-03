import styled from 'styled-components';

import { AiOutlineLogout } from 'react-icons/ai';

export const LogOutIcon = styled(AiOutlineLogout)`
  width: 35px;
  height: 35px;
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Text = styled.div`
  font-weight: 600;
  color: white;
  overflow: hidden;
`;

export const Button = styled.button`
  cursor: pointer;
  /* padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: linear-gradient(#1b1b1b, #111);
  font-weight: 500; */
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: none;
  border: none;
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: orangered;
  }
`;

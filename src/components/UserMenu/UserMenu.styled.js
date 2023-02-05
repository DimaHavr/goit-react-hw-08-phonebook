import styled from 'styled-components';

import { AiOutlineLogout } from 'react-icons/ai';

export const LogOutIcon = styled(AiOutlineLogout)`
  width: 35px;
  height: 35px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Text = styled.div`
  font-weight: 600;
  color: white;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: none;
  border: none;
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: orangered;
  }

  @keyframes btn-animation {
    0% {
      transform: scale(1.05);
    }
    20% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.13);
    }
  }
  :active {
    animation: btn-animation 1s ease-out;
  }
`;

import styled from '@emotion/styled';
import { AiFillDelete } from 'react-icons/ai';

export const DeleteIcon = styled(AiFillDelete)`
  width: 25px;
  height: 25px;
  fill: #fff;
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: red;
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

export const Item = styled.li`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(20px);
`;
export const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
`;
export const TextItem = styled.span`
  color: #fff;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

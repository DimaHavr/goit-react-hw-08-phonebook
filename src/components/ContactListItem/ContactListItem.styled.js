import styled from '@emotion/styled';
import { AiFillDelete } from 'react-icons/ai';

export const DeleteIcon = styled(AiFillDelete)`
  width: 35px;
  height: 35px;
  fill: #fff;
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: red;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border: 2px solid #000;
  padding: 10px;
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
  padding: 10px;
`;
export const TextItem = styled.span`
  color: #fff;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

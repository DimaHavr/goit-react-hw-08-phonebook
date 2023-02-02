import styled from '@emotion/styled';
import { AiFillDelete } from 'react-icons/ai';

export const DeleteIcon = styled(AiFillDelete)`
  width: 35px;
  height: 35px;
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border: 1px solid #000;
  padding: 10px;
  background-color: #4c779c4c;
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
export const TextItem = styled.span``;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

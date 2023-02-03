import styled from 'styled-components';
import { BiShowAlt, BiHide } from 'react-icons/bi';

export const EyeIcon = styled(BiShowAlt)`
  width: 25px;
  height: 25px;
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;
export const EyeOffIcon = styled(BiHide)`
  width: 25px;
  height: 25px;
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const FormInput = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border: 2px solid lightgray;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: orangered;
    border-color: orangered;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: linear-gradient(#1b1b1b, #111);
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;

export const ShowPasswordContainer = styled.div`
  position: relative;
`;

export const ShowPasswordButton = styled.div`
  position: absolute;
  right: 10px;
  top: 38%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

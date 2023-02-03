import styled from '@emotion/styled';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

export const PhoneIcon = styled(BsFillTelephoneFill)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
`;

export const UserIcon = styled(FaUserAlt)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
`;

export const FormBox = styled.form`
  display: flex;
  align-items: stretch;
  gap: 10px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const InputContainer = styled.label`
  position: relative;
`;

export const FormInput = styled.input`
  position: relative;
  text-indent: 30px;
  width: 280px;
  padding: 10px;
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

export const Button = styled.button`
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

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
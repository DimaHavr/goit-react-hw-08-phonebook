import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';

export const DeleteIcon = styled(AiFillDelete)`
  width: 25px;
  height: 25px;
  fill: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: red;
  }
  :active {
    fill: #fff;
  }
`;

export const UpdateIcon = styled(FaUserEdit)`
  width: 25px;
  height: 25px;
  fill: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: blue;
  }

  :active {
    fill: #fff;
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
  animation: slide-in-fwd-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${props =>
    !props.isVisible &&
    'animation: slide-out-tr 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;'}

  @keyframes slide-out-tr {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px) translateX(1000px);
      transform: translateY(-1000px) translateX(1000px);
      opacity: 0;
    }
  }

  @keyframes slide-in-fwd-right {
    0% {
      -webkit-transform: translateZ(-1400px) translateX(1000px);
      transform: translateZ(-1400px) translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
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

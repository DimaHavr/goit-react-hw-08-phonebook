import styled from '@emotion/styled';
import { BsFillFilterSquareFill } from 'react-icons/bs';
export const FilterIcon = styled(BsFillFilterSquareFill)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  fill: #00000042;
  top: 33%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: darkslategrey;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  color: #000;
  padding-top: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const FilterInput = styled.input`
  text-indent: 30px;
  width: 280px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border: 2px solid #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #000;
    outline: 1px solid #000;
    border-radius: 5px;
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

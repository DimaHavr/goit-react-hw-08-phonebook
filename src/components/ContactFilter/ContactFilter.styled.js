import styled from '@emotion/styled';

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

export const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  text-align: left;
`;

export const FilterInput = styled.input`
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

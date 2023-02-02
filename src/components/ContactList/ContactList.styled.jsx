import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
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
  width: 80px;
  height: 35px;
  font-weight: bold;
  font-size: 15px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :active {
    transform: scale(1.1);
  }
`;

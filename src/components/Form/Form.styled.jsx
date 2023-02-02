import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 2px solid #000;
  padding: 20px;
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 15px;
  color: #000;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 15px;
  color: #000;
  background-color: #4c779c4c;

  border-radius: 5px;
  padding: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :active {
    transform: scale(1.1);
  }
`;

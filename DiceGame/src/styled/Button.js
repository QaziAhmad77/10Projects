import { styled } from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  padding: 10px 18px;
  background: #000;
  color: white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s all ease-in;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const OutlineButton = styled(Button)`
  // it will take all property of above
  background-color: white;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

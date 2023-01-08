import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #11998e;
  border-radius: 4px;
  color: #11998e;
  font-weight: 500;
  padding: 8px 16px;
  font-family: 'Lato';
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: rgb(249, 250, 251);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: none;
  }
`;

export default Button;

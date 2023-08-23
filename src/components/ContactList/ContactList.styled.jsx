import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const ContactListContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2196F3; 
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

export const ContactName = styled.span`
  font-weight: bold;
  color: white; 
`;

export const DeleteButton = styled.button`
  background-color: #FF5722;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E64A19;
  }
  animation: ${fadeIn} 0.5s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.4);
  }
`;

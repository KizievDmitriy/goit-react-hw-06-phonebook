import styled from 'styled-components';

export const ItemContact = styled.li`
  padding: 16px;
  font-size: 24px;
  align-items: center;
  display: flex;

  &:before {
    content: '';
    font-size: 10px;
    margin-left: -14px;
    padding-right: 8px;
    vertical-align: 20%;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  text-transform: uppercase;
  padding: 6px 20px;
  border-radius: 4px;
  background-color: #323232;
  color: #fff;
`;

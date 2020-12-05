import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ffb84d;
  height: 56px;
  border-radius: 10px;
  border: 0px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ffb84d')};
  }
`;

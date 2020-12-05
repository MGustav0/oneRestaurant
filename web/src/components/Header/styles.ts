import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #c72828;
  padding: 30px;

  header {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #ffb84d;
      width: 20px;
      height: 20px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ffb84d')};
      }
    }
  }
`;

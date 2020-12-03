import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  /* Acessa as propriedades do componente */
  ${props =>
    props.isErrored &&
    css`
      border-color: #c72828;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ffb84d;
      border-color: #ffb84d;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ffb84d;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &:placeholder {
      color: #666360;
    }
  }

  /* Pega o primeiro SVG e aplica o estilo */
  > svg {
    margin-right: 16px;
  }
`;

/* Herança de estilização, estiliza outro componente */
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c72828;
    color: #fff;

    &::before {
      border-color: #c72828 transparent;
    }
  }
`;

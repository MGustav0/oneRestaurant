import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f0f0f5;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #ffb84d;
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
    color: #3d3d4d;

    &:placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #ffb84d;
    border: 2px solid #c72828;
    color: #fff;

    &::before {
      border-color: #c72828 transparent;
    }
  }
`;
// ffb84d

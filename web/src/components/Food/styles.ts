import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 8px;

  height: 478px;
  width: 352px;

  header {
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    img {
      pointer-events: none;
      user-select: none;
    }
  }
  section.body {
    padding: 30px;
    height: 183px;
    overflow: hidden;

    h2 {
      color: #3d3d4d;
    }
    p {
      color: #3d3d4d;
      margin-top: 16px;
      text-overflow: ellipsis;
    }
  }

  section.footer {
    height: 100px;
    display: flex;
    place-items: center;
    place-content: center;

    button {
      height: 50px;
      background-color: #39b100;
      border: none;
      border-radius: 5px;
      outline: none;
      width: 300px;
    }
  }
`;

import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  max-height: max-content;

  margin: 0 auto;
  padding: 10px 40px 0 40px;
  margin-top: -170px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 823px) {
  }
`;

export const FoodContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 50px;
  width: 980px;
  border: none;
  display: grid;
  grid-template-areas:
    'img Intro'
    'Recipe Recipe';
  grid-template-columns: 1fr 1fr;

  img {
    width: 490px;
    height: 490px;
  }

  @media screen and (max-width: 823px) {
    width: 411px;
    grid-template-columns: 1fr 1fr;

    img {
      width: 205px;
      height: 205px;
    }
  }
`;

export const Intro = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  justify-content: space-evenly;
  text-align: center;

  h1 {
    font-size: 18px;
    color: #032937;
  }

  h2 {
    font-size: 24px;
    color: #2d2d2d;
  }

  h3 {
    font-size: 36px;
    font-weight: 700;
    color: #f1a10a;
  }

  @media screen and (max-width: 823px) {
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 22px;
    }
  }
`;

export const Recipe = styled.div`
  width: 90%;
  grid-column: 1/3;
  justify-self: center;

  p {
    margin: 0 auto;
    margin-top: 75px;
    margin-bottom: 50px;
    align-self: center;
    font-size: 24px;
    text-align: justify;
    color: #2d2d2d;
  }

  div {
    margin: 0 auto;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 823px) {
    div {
      margin-bottom: 0;

      iframe {
        width: 364px;
        height: 204.75px;
      }
    }
  }
`;

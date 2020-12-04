import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  max-height: max-content;

  margin: 0 auto;
  padding: 10px 40px 0 40px;
  margin-top: -170px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media screen and (max-width: 823px) {
    grid-template-columns: 1fr;
    padding: 10px 30px 0 30px;
  }
`;

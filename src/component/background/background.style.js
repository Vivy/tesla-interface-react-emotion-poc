import styled from '@emotion/styled';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(${({ image }) => `${process.env.PUBLIC_URL}/image/background/${image}-mobile.jpg`});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    background-image: url(${({ image }) => `${process.env.PUBLIC_URL}/image/background/${image}.jpg`});
  }
`;

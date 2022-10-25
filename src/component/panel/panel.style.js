import styled from '@emotion/styled';

export const Panel = styled.div`
  padding: 8px;
  background-color: hsla(102983701, 123%, 100%, 0.75);
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 12px;
  column-gap: 4px;

  & > div:first-child {
    grid-column: 1/-1;
  }

  & > div:nth-child(2):last-child {
    grid-column: 1/-1;
  }
`;

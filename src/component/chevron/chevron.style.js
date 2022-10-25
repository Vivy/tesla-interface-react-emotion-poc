import { css } from '@emotion/react';
import styled from '@emotion/react';

export const Chevron = styled.a`
  width: 48px;
  height: 48px;
  transition: 250ms;
  border-radius: 50%;
  display: inline-block;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    fill: ${({ theme }) => theme.color.shark};
  }

  ${({ id }) =>
    id === `accessories`
      ? css`
    cursor: n-resize;
    transform: : rotate(180deg);
    `
      : css`
          cursor: s-resize;
        `}
`;

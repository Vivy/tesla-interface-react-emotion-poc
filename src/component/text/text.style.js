import { css } from '@emotion/react';
import styled from '@emotion/styled';

const sizeMap = {
  small: 14,
  large: 48,
};

const getTitle = ({ isTitle = false }) =>
  isTitle
    ? css`
        font-size: ${sizeMap.large / 16}rem;
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        padding: 0.5rem;
      `
    : css`
        font-size: ${sizeMap.small / 16} rem;
      `;

const getLink = ({ isLink, theme }) =>
  isLink
    ? css`
        text-decoration: none;
        border-bottom: 1px solid ${theme.color['gray-tuna']};
      `
    : css``;

const getColor = ({ theme }) => theme.color['gray-tuna'];

export const Text = styled.div`
  white-space: nowrap;
  color: ${getColor};
  justify-self: center;
  cursor: ${({ isLink }) => (isLink ? 'pointer' : '')};

  ${getTitle}
  ${getLink}
`;

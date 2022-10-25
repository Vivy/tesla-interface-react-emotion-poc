import styled from '@emotion/styled';

const gapMap = {
  small: 16,
  large: 48,
};

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ gap = 'small' }) => gapMap[gap] / 16}rem;
`;

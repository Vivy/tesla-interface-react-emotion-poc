import styled from '@emotion/styled';

export const Button = styled.button`
  border: 0;
  background-color: red;
  width: 256px;
  height: 40px;
  cursor: pointer;
  transition: 250ms;
  border-radius: ${({ theme }) => theme.border.radius / 16}rem;

  background-color: ${({ theme, nuance }) =>
    nuance ? theme.color.mercury : theme.color.shark};
  color: ${({ theme, nuance }) =>
    nuance ? theme.color.shark : theme.color.mercury};

  &:hover {
    color: ${({ theme, nuance }) =>
      nuance ? theme.color.mercury : theme.color.shark};
    background-color: ${({ theme, nuance }) =>
      nuance ? theme.color.shark : theme.color.mercury};
  }
`;

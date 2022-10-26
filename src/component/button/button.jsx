import * as S from './button.style';

const Button = ({ children, nuance }) => {
  return <S.Button nuance={nuance}>{children}</S.Button>;
};

export default Button;

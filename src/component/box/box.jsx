import { node, oneOf } from 'prop-types';

import * as S from './box.style';

const Box = ({ children, gap }) => <S.Box gap={gap}>{children}</S.Box>;

Box.defaultProps = {
  children: null,
  gap: 'small',
};

Box.propTypes = {
  children: node,
  gap: oneOf(['small', 'large']),
};

export default Box;

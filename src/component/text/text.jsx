import { bool, node } from 'prop-types';
import * as S from './text.style';

const Text = ({ isLink, isTitle, children }) => {
  return (
    <S.Text isLink={isLink} isTitle={isTitle}>
      {children}
    </S.Text>
  );
};

Text.propTypes = {
  isTitle: bool,
  isLink: bool,
  children: node,
};

Text.defaultProps = {
  isTitle: false,
  isLink: false,
  children: null,
};

export default Text;

import { string } from 'prop-types';

import { Text } from '..';

import * as S from './panel.style';

const Panel = ({ title, text, link }) => {
  return (
    <S.Panel>
      <Text isTitle>{title}</Text>
      <Text>{text}</Text>
      <Text isLink>{link}</Text>
    </S.Panel>
  );
};

Panel.defaultProps = {
  title: '',
  text: '',
  link: '',
};

Panel.propTypes = {
  title: string,
  text: string,
  link: string,
};

export default Panel;

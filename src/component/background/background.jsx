import { arrayOf, shape, string } from 'prop-types';
import { Box, Button, Chevron, Panel } from '..';
import * as S from './background.style';

const Background = ({ section, goTo }) => {
  const { id, link, text, who, buttonList = [] } = section;
  return (
    <S.Background image={id} id={id}>
      <Panel text={text} title={who} link={link} />

      <Box gap='large'>
        <Box gap='small'>
          {buttonList.map((buttonText, key) => (
            <Button nuance={key}>{buttonText}</Button>
          ))}
        </Box>
        <Chevron id={id} goTo={goTo} />
      </Box>
    </S.Background>
  );
};

Background.defaultProps = {
  section: {
    id: '',
    link: '',
    text: '',
    who: '',
    buttonList: [],
  },
};

Background.propTypes = {
  section: shape({
    id: string.isRequired,
    link: string.isRequired,
    text: string.isRequired,
    who: string.isRequired,
    buttonList: arrayOf(string),
  }),
};

export default Background;

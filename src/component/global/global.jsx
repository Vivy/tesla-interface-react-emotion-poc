import * as S from './global.style';
import { Global as GlobalEmotion } from '@emotion/react';

const Global = () => {
  return (
    <>
      <GlobalEmotion styles={S.Reset} />
      <GlobalEmotion styles={S.Font} />
    </>
  );
};

export default Global;

import { useEffect, useState } from 'react';
import { Background, Global, Theme } from '..';

const Tesla = () => {
  const [list, update] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (window.location.port === '3001') {
          const result = await (
            await fetch('http://local:3333/section')
          ).json();

          update(result);
        } else {
          const result = await (
            await fetch(
              'https://raw.githubusercontent.com/marianzburlea/simple-api/main/data-base.json'
            )
          ).json();

          update(result.tesla);
        }
      } catch (error) {
        console.error(
          `Error with message: ${error.message} and code: ${error.code}`
        );
      }
    })();
  }, []);

  return (
    <Theme>
      <Global />

      {list.map((section, key) => (
        <Background
          key={section.id}
          section={section}
          goTo={key < list.length - 1 ? list[key + 1].id : list[0].id}
        />
      ))}
    </Theme>
  );
};
export default Tesla;

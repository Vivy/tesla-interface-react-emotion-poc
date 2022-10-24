import { Panel } from '../panel';
import { teslaConfig } from './home.config';
import { Button } from '../button';
import { Background } from '../background';

export const Home = () => {
  return (
    <div>
      {teslaConfig.map((section) => (
        <div>
          <Panel
            sectionTitle={section.sectionTitle}
            link={section.link}
            key={section.sectionTitle}
          ></Panel>
          <Button
            button1Text={section.button1Text}
            button2Text={section.button2Text}
          />
        </div>
      ))}
    </div>
  );
};

import { TechnologiesBlock } from './technologiesBlock/TechnologiesBlock';
import { AboutMeBlock } from './aboutMeBlock/AboutMeBlock';
import { MainBlock } from './mainBlock/MainBlock';
import { WorksBlock } from './worksBlock/WorksBlock';
import { ContactsBlock } from './contactsBlock/ContactsBlock';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainBlock />
      <AboutMeBlock />
      <TechnologiesBlock />
      <WorksBlock />
      <ContactsBlock />
    </div>
  );
};

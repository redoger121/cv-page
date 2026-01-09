import { HashLink } from 'react-router-hash-link';
import styles from './MainBlock.module.scss';
import { Icon } from '@iconify/react';

export const MainBlock = () => {
  return (
    <main id="main" className={styles.container}>
      <div className={styles.contentContainer}>
        <span className={styles.developer}>{'<developer>'}</span>

        <div className={styles.mainInfo}>
          <h1 className={styles.fio}>Ковригин Иван</h1>
          <p className={styles.specialize}>
            Фронтенд-разработчик, специализируюсь на
            <span className={styles.greenText}> React</span>,
            <span className={styles.greenText}> Redux </span>
            &amp;
            <span className={styles.blueText}> TypeScript </span>
          </p>
          <span className={styles.bottomText}>
            Создаю исключительный пользовательский опыт с помощью чистой архитектуры,
            производительного кода и тщательного внимания к деталям.
          </span>
        </div>

        <span className={styles.developerBottom}>{'<developer>'}</span>

        <div className={styles.linksContainer}>
          <HashLink smooth to="/#works" className={styles.worksLink}>
            Мой опыт
          </HashLink>
          <HashLink smooth to="/#contacts" className={styles.contactsLink}>
            Связаться
          </HashLink>
        </div>
        <HashLink smooth to='/#about' className={styles.arrow}>
        <Icon icon='heroicons:chevron-down' className={styles.arrowIcon} />
        </HashLink>
      </div>
    </main>
  );
};

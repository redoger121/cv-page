import styles from './Header.module.scss';
import { ThemeButton } from './themeButton/ThemeButton';
import { HashLink } from 'react-router-hash-link';

const headerItems = [
  { label: '<main/>', id: '/#main' },
  { label: 'Обо мне', id: '/#about' },
  { label: 'Технологии', id: '/#technologies' },
  { label: 'Опыт работы', id: '/#works' },
  { label: 'Контакты', id: '/#contacts' },
];

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.actionsContainer}>
        <div className={styles.headerItemsContainer}>
          {headerItems.map(({label, id}, idx) => (
            <HashLink key={idx} className={styles.item} smooth to={id}>
              {label}
            </HashLink>
          ))}
        </div>
        <ThemeButton />
      </div>
    </div>
  );
};

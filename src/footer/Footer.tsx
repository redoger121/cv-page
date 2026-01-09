import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© 2026 Все права защищены</span>
        <div className="">
          <span className={styles.greenText}>console</span>
          <span>.</span>
          <span className={styles.blueText}>log</span>
          <span>{'('}</span>
          <span className={styles.yellowText}>"Спасибо за визит! 👋"</span>
          <span>{');'}</span>
        </div>
      </div>
    </footer>
  );
};

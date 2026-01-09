import styles from './Description.module.scss';

export const Description = () => {
  return (
    <div className={styles.description}>
      <p>
        Фронтенд-разработчик с опытом более пяти лет, специализируюсь на React и TypeScript. Создаю
        современные веб-приложения с акцентом на чистый, поддерживаемый и элегантный код.
      </p>
      <p>Каждый проект для меня — шанс сделать интерфейс удобным и приятным для пользователей.</p>
    </div>
  );
};

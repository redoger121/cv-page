import { BlockHeader } from 'shared';
import styles from './ContactsBlock.module.scss';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

const gitHubLink = 'https://github.com/redoger121';
const email = 'vanya.kovrigin@gmail.com';
const telegarm = 'https://t.me/ivan_kovr';

export const ContactsBlock = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contacts" className={styles.blockContainer}>
      <div className={styles.container}>
        <BlockHeader name="Связаться" description="Давайте работать вместе" />
        <p className={styles.text}>
          Есть проект или хотите обсудить возможности сотрудничества? Буду рад пообщаться.
        </p>
        <div>
          <h3 className={styles.h3Text}>Свяжитесь со мной</h3>

          <p className={styles.descriptionText}>
            Не стесняйтесь обращаться через любую из этих платформ. Я всегда открыт для обсуждения
            новых проектов и возможностей.
          </p>

          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <a target="_blank" href={gitHubLink} className={clsx(styles.link, styles.githubLink)}>
                <Icon icon="mdi:github" className={styles.icon} />
                <span> GitHub</span>
              </a>

              <button
                type="button"
                onClick={handleEmailClick}
                className={clsx(styles.link, styles.emailLink)}
              >
                <Icon icon="mdi:email" className={styles.icon} />
                <span>Email</span>
              </button>

              <a target="_blank" href={telegarm} className={clsx(styles.link, styles.telegramLink)}>
                <Icon icon="mdi:telegram" className={styles.icon}/>
                <span> Telegram </span>
              </a>
            </div>

            <div className={styles.rightBlockContainer}>
              <div className="">{'{'}</div>
              <div className={styles.codeTextContainer}>
                <span className={styles.greenText}>"status"</span>
                <span>: </span>
                <span  className={styles.yellowText}>"Доступен для работы"</span>
                <span>,</span>
              </div>
              <div className={styles.codeTextContainer}>
                <span  className={styles.greenText}>"location"</span>
                <span>: </span>
                <span  className={styles.yellowText}>"Удаленно / Красноярск"</span>
                <span>,</span>
              </div>
              <div className={styles.codeTextContainer}>
                <span  className={styles.greenText}>"timezone"</span>
                <span>: </span>
                <span  className={styles.yellowText}>"UTC+7"</span>
              </div>
              <div className="">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

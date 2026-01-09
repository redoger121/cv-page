import type { FC } from 'react';

import { Icon } from '@iconify/react';
import type { Work } from '../lib/types';

import styles from './WorkCard.module.scss';

type WorkCardProps = Work & { showDivider?: boolean };

export const WorkCard: FC<WorkCardProps> = ({ period, name, tasks, technologies, showDivider }) => {
  const technologiesText = technologies.filter(Boolean).join(', ');

  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <span className={styles.iconContainer}>
          <Icon icon="heroicons:code-bracket-16-solid" />
        </span>
        {showDivider && <div className={styles.dividerVertical} />}
      </div>

      <div className={styles.rightBlock}>
        <span className={styles.period}>{period}</span>
        <span className={styles.name}>{name}</span>
        <ul className={styles.tasksList}>
          {tasks.map((task, index) => {
            return (
              <li key={index} className={styles.task}>
                {task}
              </li>
            );
          })}
        </ul>
        <div className="">
          <span className={styles.technologiesHeader}>Технологии: </span>
          <span className={styles.technologiesText}>{technologiesText}</span>
        </div>
      </div>
    </div>
  );
};

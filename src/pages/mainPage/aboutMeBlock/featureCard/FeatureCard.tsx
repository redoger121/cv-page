import { Icon } from '@iconify/react';
import type { FC } from 'react';

import styles from './FeatureCard.module.scss';

type FeatureCardProps = {
  icon: string;
  name: string;
  description: string;
};

export const FeatureCard: FC<FeatureCardProps> = ({ icon, name, description }) => {
  return (
    <div className={styles.cardContainer}>
    <div>
      <Icon icon={icon} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
    </div>
      <p>{description}</p>
    </div>
  );
};

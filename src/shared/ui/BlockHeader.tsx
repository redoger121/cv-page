import type { FC } from 'react';

import styles from './BlockHeader.module.scss'

type BlockHeaderProps = {
  name: string;
  description: string;
};

export const BlockHeader: FC<BlockHeaderProps> = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <span className={styles.nameText}>// {name}</span>
      <span className={styles.descriptionText}>{description}</span>
    </div>
  );
};

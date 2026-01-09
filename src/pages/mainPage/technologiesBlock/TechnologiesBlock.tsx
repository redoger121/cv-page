import { BlockHeader } from 'shared';
import { PhysicsPyramid } from './PhysicsPyramid/PhysicsPyramid';

import styles from './TechnologiesBlock.module.scss';

export const TechnologiesBlock = () => {
  return (
    <section id="technologies">
      <div className={styles.blockContainer}>
        <div className={styles.container}>
          <BlockHeader name="Технологии" description="Инструменты и технологии" />
          <p className={styles.text}>
            Современные технологии, которые я использую для воплощения идей в жизнь
          </p>
          <PhysicsPyramid />
          <div className={styles.bottomContentContainer}>
            <span className={styles.greenText}>const </span>
            <span>alwaysLearning = </span>
            <span className={styles.orangeText}>true</span>
            <span>;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

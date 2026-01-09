import { WorkCard } from './workCard/WorkCard';

import { works } from './lib/config';

import styles from './WorksBlock.module.scss';
import { BlockHeader } from 'shared';

export const WorksBlock = () => {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <div>
          <BlockHeader name="Опыт работы" description="Профессиональный путь" />

          <p className={styles.text}>
            Хронология моего профессионального опыта и ключевых проектов
          </p>
        </div>
        <div>
          {works.map((work, index) => {
            const showDivider = index < works.length - 1;
            console.log(showDivider);
            return <WorkCard {...work} key={index} showDivider={showDivider} />;
          })}
        </div>
      </div>
    </section>
  );
};

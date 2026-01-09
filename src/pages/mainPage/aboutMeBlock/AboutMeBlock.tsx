import { AnimatedCharacter } from './animatedCharacter/AnimatedCharacter';

import { BlockHeader } from 'shared';
import { Description } from './description/Description';

import styles from './AboutMeBlock.module.scss';
import { FeatureCard } from './featureCard/FeatureCard';

const cards = [
  {
    icon: 'heroicons:code-bracket',
    name: 'Чистая архитектура',
    description:
      'Создание поддерживаемого и масштабируемого кода, который выдержит испытание временем',
  },
  {
    icon: 'heroicons:sparkles',
    name: 'Ориентированный на пользователя интерфейс',
    description:
      'Создание интуитивно понятных интерфейсов, с которыми пользователям нравится взаимодействовать',
  },
  {
    icon: 'heroicons:square-3-stack-3d',
    name: 'Современный стек',
    description: 'Использование передовых технологий для создания производительных приложений',
  },
];

export const AboutMeBlock = () => {
  return (
    <section id="about">
      <div className={styles.blockContainer}>
        <BlockHeader name="Обо мне" description="Кто я" />
        <div className={styles.container}>
          <AnimatedCharacter />
          <Description />
        </div>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => {
            return <FeatureCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};

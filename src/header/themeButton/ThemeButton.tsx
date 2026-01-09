import { Icon } from '@iconify/react';
import styles from './ThemeButton.module.scss';
import { ThemeAnimationType, useThemeAnimation } from '@space-man/react-theme-animation';

export const ThemeButton = () => {
  const icons = {
    light: 'mdi:weather-sunny',
    dark: 'mdi:weather-night',
    system: 'mdi:weather-night',
  };

  const { theme, ref, toggleTheme } = useThemeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    duration: 700,
  });

  const onButtonClickHandler = () => {
    toggleTheme();
  };

  return (
    <button ref={ref} onClick={onButtonClickHandler} className={styles.button}>
      <Icon icon={icons[theme]} className={styles.icon} />
    </button>
  );
};

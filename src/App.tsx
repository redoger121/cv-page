import { SpacemanThemeProvider, ThemeAnimationType } from '@space-man/react-theme-animation';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { MainPage } from './pages/mainPage';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <SpacemanThemeProvider
      animationType={ThemeAnimationType.CIRCLE}
      duration={700}
      defaultTheme={'dark'}
      defaultColorTheme={'dark'}
    >
      <>
        <svg aria-hidden="true" focusable="false" style={{ display: 'none' }}>
          <filter id="glass">
            <feTurbulence
              type="turbulence"
              baseFrequency={0.008}
              numOctaves={1}
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={50}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>

        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </>
    </SpacemanThemeProvider>
  );
}

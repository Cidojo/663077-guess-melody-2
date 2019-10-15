import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {WelcomeScreen} from './components/welcome-screen/welcome-screen.jsx';

const settings = {
  lives: 3,
  timeLimit: 5
};

const init = () => {
  ReactDOM.render(
      <WelcomeScreen
        lives={settings.lives}
        timeLimit={settings.timeLimit}
      />,
      document.getElementById(`root`)
  );
};

init();

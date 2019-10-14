import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {WelcomeScreen} from './components/welcome-screen/welcome-screen.jsx';

const settings = {
  welcomeMessage: `Hello React`
};

ReactDOM.render(
    <WelcomeScreen
      message={settings.welcomeMessage}
    />,
    document.getElementById(`root`)
);

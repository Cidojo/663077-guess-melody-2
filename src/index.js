import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {questions} from './mocks/questions.js';
import settings from './mocks/settings.js';

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        lives={settings.lives}
        timeLimit={settings.timeLimit}
        questions={gameQuestions}
      />,
      document.getElementById(`root`)
  );
};

init(questions);

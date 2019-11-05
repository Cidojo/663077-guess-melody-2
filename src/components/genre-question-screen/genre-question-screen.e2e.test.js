import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreen} from './genre-question-screen.jsx';

configure({adapter: new Adapter()});

it(`checks onUserAnswer called on user answer with valid arguments`, () => {
  const onUserAnswer = jest.fn();

  const genreQuestionScreen = mount(<GenreQuestionScreen
    onAnswer={onUserAnswer}
    screenIndex={0}
    question={{
      type: `genre`,
      genre: `rock`,
      answers: [{
        genre: `rock`,
        src: ``
      }]
    }}
  />);

  const answerToCheck = genreQuestionScreen.find(`.game__input`);
  const form = genreQuestionScreen.find(`form.game__tracks`);

  answerToCheck.instance().checked = true;

  form.simulate(`submit`, {
    currentTarget: form
  });

  expect(onUserAnswer).toHaveBeenCalledWith(0, true);
});

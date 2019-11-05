import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

configure({adapter: new Adapter()});

it(`checks onUserAnswer method changes question state after Play button clicked on welcome screen`, () => {
  const app = mount(<App
    lives={0}
    timeLimit={0}
    questions={[{
      type: `genre`,
      genre: `rock`,
      answers: [{
        genre: `rock`,
        src: ``
      }]
    }]}
  />);

  const welcomeButton = app.find(`.welcome__button`);
  welcomeButton.simulate(`click`);

  expect(app.state()).toEqual({
    question: 0,
    userAnswers: []
  });
});

it(`checks onUserAnswer method changes question state after user has answered at genre game question`, () => {
  const app = mount(<App
    lives={0}
    timeLimit={0}
    questions={[{
      type: `genre`,
      genre: `rock`,
      answers: [{
        genre: `rock`,
        src: ``
      }]
    }, {
      type: `genre`,
      genre: `rock`,
      answers: [{
        genre: `rock`,
        src: ``
      }]
    }]}
  />);


  const welcomeButton = app.find(`.welcome__button`);
  welcomeButton.simulate(`click`);

  const answerToCheck = app.find(`.game__input`);
  const form = app.find(`form.game__tracks`);

  answerToCheck.simulate(`click`);
  form.simulate(`submit`);

  expect(app.state()).toEqual({
    question: 1,
    userAnswers: [{
      isCorrect: false,
      screenIndex: 0
    }]
  });
});

it(`checks onUserAnswer method changes question state after user has answered at artist game question`, () => {
  const app = mount(<App
    lives={0}
    timeLimit={0}
    questions={[{
      type: `artist`,
      song: {
        artist: `Snow`,
        src: ``
      },
      answers: [{
        picture: ``,
        artist: `Snow`,
      }]
    }, {
      type: `artist`,
      song: {
        artist: ``,
        src: ``
      },
      answers: [{
        picture: ``,
        artist: ``,
      }]
    }]}
  />);


  const welcomeButton = app.find(`.welcome__button`);
  welcomeButton.simulate(`click`);

  const form = app.find(`form.game__artist`);

  form.simulate(`change`, {
    target: {
      value: `Snow`
    }
  });

  expect(app.state()).toEqual({
    question: 1,
    userAnswers: [{
      isCorrect: true,
      screenIndex: 0
    }]
  });
});

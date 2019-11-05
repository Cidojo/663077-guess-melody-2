import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen.jsx';

configure({adapter: new Adapter()});

it(`checks welcome button click`, () => {
  const onStartButtonClick = jest.fn();

  const welcomeScreen = shallow(<WelcomeScreen
    lives={0}
    timeLimit={0}
    onStartButtonClick={onStartButtonClick}
  />);

  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`);
  expect(onStartButtonClick).toHaveBeenCalledTimes(1);
});

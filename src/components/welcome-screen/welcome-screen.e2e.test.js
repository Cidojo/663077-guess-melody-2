import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen.jsx';

configure({adapter: new Adapter()});

it(`handles welcome button click`, () => {
  const handleStartClick = jest.fn();

  const welcomeScreen = shallow(<WelcomeScreen
    lives={0}
    timeLimit={0}
    onStartClick={handleStartClick}
  />);

  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`);
  expect(handleStartClick).toHaveBeenCalledTimes(1);
});

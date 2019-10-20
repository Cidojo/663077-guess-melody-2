import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      lives={0}
      timeLimit={0}
      onStartClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

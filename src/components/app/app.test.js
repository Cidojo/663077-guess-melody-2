import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`renders correctly with genre game type`, () => {
  const tree = renderer
    .create(<App
      lives={0}
      timeLimit={0}
      questions={[{
        type: `genre`,
        genre: ``,
        answers: [{
          src: ``,
          genre: ``
        }]
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly with artist game type`, () => {
  const tree = renderer
    .create(<App
      lives={0}
      timeLimit={0}
      questions={[{
        type: `artist`,
        song: {
          src: ``,
          artist: ``
        },
        answers: [{
          picture: ``,
          artist: ``
        }]
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

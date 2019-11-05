import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{
        type: `artist`,
        song: {
          src: ``,
          artist: ``
        },
        answers: [{
          picture: ``,
          artist: ``
        }]
      }}
      onAnswer={() => {}}
      screenIndex={0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {GenreQuestionScreen} from './genre-question-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question={{
        type: `genre`,
        genre: ``,
        answers: [{
          src: ``,
          genre: ``
        }]
      }}
      onAnswer={() => {}}
      screenIndex={0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

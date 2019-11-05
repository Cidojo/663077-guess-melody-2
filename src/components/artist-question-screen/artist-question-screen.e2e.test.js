import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';

configure({adapter: new Adapter()});

it(`checks onUserAnswer called on user answer with valid arguments`, () => {
  const onUserAnswer = jest.fn();

  const artistQuestionScreen = shallow(<ArtistQuestionScreen
    onAnswer={onUserAnswer}
    screenIndex={0}
    question={{
      type: `artist`,
      song: {
        src: ``,
        artist: `abc`
      },
      answers: [{
        picture: ``,
        artist: `abc`
      }]
    }}
  />);

  const form = artistQuestionScreen.find(`form.game__artist`);

  form.simulate(`change`, {
    target: {
      value: `abc`
    }
  });

  expect(onUserAnswer).toHaveBeenCalledWith(0, true);
});

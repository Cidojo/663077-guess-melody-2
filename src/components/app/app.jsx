import * as React from 'react';
import * as PropTypes from 'prop-types';
import {WelcomeScreen} from './../welcome-screen/welcome-screen.jsx';
import {GenreQuestionScreen} from './../genre-question-screen/genre-question-screen.jsx';
import {ArtistQuestionScreen} from './../artist-question-screen/artist-question-screen.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      userAnswers: []
    };

    this.onUserAnswer = this.onUserAnswer.bind(this);
  }

  onUserAnswer(screenIndex, isCorrect) {
    this.setState((prevState, prevProps) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= prevProps.questions.length;

      return ({
        question: isEnd ? -1 : prevState.question + 1,
        userAnswers: screenIndex > -1 ? [...prevState.userAnswers, {screenIndex, isCorrect}] : []
      });
    });
  }

  render() {
    return App.getScreen(this.state.question, this.props, this.onUserAnswer);
  }

  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {lives, timeLimit} = props;

      return (
        <WelcomeScreen
          lives={lives}
          timeLimit={timeLimit}
          onStartButtonClick={onUserAnswer}
        />
      );
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case (`genre`):
        return (
          <GenreQuestionScreen
            question={questions[question]}
            onAnswer={onUserAnswer}
            screenIndex={question}
          />
        );
      case (`artist`):
        return (
          <ArtistQuestionScreen
            question={questions[question]}
            onAnswer={onUserAnswer}
            screenIndex={question}
          />
        );
    }

    return null;
  }
}

App.propTypes = {
  lives: PropTypes.number,
  timeLimit: PropTypes.number,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.string,
          genre: PropTypes.string,
          answers: PropTypes.arrayOf(
              PropTypes.shape({
                genre: PropTypes.string,
                src: PropTypes.string
              })
          )
        }),
        PropTypes.shape({
          type: PropTypes.string,
          song: PropTypes.shape({
            artist: PropTypes.string,
            src: PropTypes.string
          }),
          answers: PropTypes.arrayOf(
              PropTypes.arrayOf(
                  PropTypes.shape({
                    picture: PropTypes.string,
                    artist: PropTypes.string
                  })
              )
          )
        })
      ])
  )
};

export {App};

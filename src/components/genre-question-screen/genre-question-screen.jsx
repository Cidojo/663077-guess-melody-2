import * as React from 'react';
import * as PropTypes from 'prop-types';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    const {screenIndex, onAnswer, question} = this.props;

    const isCorrect = [...e.currentTarget.elements]
      .filter((element) => element.type && element.type === `checkbox` && element.value === question.genre)
      .every((element) => element.checked);

    onAnswer(screenIndex, isCorrect);
  }

  render() {
    const {question, screenIndex} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }}
            />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={this.handleFormSubmit}
          >
            {
              answers.map((answer, i) => {
                return (
                  <div
                    key={`${screenIndex}-answer-${i}`}
                    className="track"
                  >
                    <button className="track__button track__button--play" type="button"></button>
                    <div className="track__status">
                      <audio></audio>
                    </div>
                    <div className="game__answer">
                      <input
                        className="game__input visually-hidden"
                        type="checkbox"
                        name="answer"
                        value={answer.genre}
                        id={`answer-${i}`} />
                      <label
                        className="game__check"
                        htmlFor={`answer-${i}`}
                      >
                        Отметить
                      </label>
                    </div>
                  </div>
                );
              })
            }

            <button
              className="game__submit button"
              type="submit"
            >
              Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  screenIndex: PropTypes.number,
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          genre: PropTypes.string
        })
    )
  })
};

export {GenreQuestionScreen};

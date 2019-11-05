import * as React from 'react';
import * as PropTypes from 'prop-types';

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  render() {
    const {question, screenIndex} = this.props;
    const {answers} = question;

    return (
      <section className="game game--artist">
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
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio></audio>
              </div>
            </div>
          </div>

          <form
            className="game__artist"
            onChange={this.handleFormChange}
          >
            {
              answers.map((answer, i) => {
                return (
                  <div
                    className="artist"
                    key={`${screenIndex}-answer-${i}`}
                  >
                    <input
                      className="artist__input visually-hidden"
                      type="radio"
                      name="answer"
                      value={`${answer.artist}`}
                      id={`answer-${i}`} />
                    <label
                      className="artist__name"
                      htmlFor={`answer-${i}`}
                    >
                      <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
                      Пелагея
                    </label>
                  </div>
                );
              })
            }

          </form>
        </section>
      </section>
    );
  }

  handleFormChange(e) {
    const {screenIndex, onAnswer, question} = this.props;
    const isCorrect = e.target.value === question.song.artist;

    onAnswer(screenIndex, isCorrect);
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func,
  screenIndex: PropTypes.number,
  question: PropTypes.shape({
    type: PropTypes.string,
    song: PropTypes.shape({
      src: PropTypes.string,
      artist: PropTypes.string
    }),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          picture: PropTypes.string,
          artist: PropTypes.string
        })
    )
  })
};

export {ArtistQuestionScreen};

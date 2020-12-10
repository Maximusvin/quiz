import { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import s from './Quiz.module.css';

class Quiz extends Component {
  state = {
    quiz: [],
  };

  render() {
    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1 className={s.title}>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}

export default Quiz;

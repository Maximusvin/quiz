import { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import s from './Quiz.module.css';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    results: {},
    quiz: [
      {
        id: 1,
        question: 'Что такое React?',
        rightAnswerId: 4,
        answers: [
          { text: 'Игрушка для покемонов', id: 1 },
          { text: 'Фреймворк для Java', id: 2 },
          { text: 'Библиотека для Node.js', id: 3 },
          { text: 'Библиотека JavaScript', id: 4 },
        ],
      },
      {
        id: 2,
        question: 'Что такое JSX?',
        rightAnswerId: 4,
        answers: [
          { text: 'Трансформер с WebPack и Babel', id: 1 },
          { text: 'JavaScript Handle Bar', id: 2 },
          { text: 'Объект, который наследуется от Redux', id: 3 },
          { text: 'Язык разметки JS', id: 4 },
        ],
      },
      {
        id: 3,
        question: 'В каком году появился React',
        rightAnswerId: 3,
        answers: [
          { text: '1999', id: 1 },
          { text: '2010', id: 2 },
          { text: '2014', id: 3 },
          { text: '2018', id: 4 },
        ],
      },
      {
        id: 4,
        question: 'Кто такой А.Репета',
        rightAnswerId: 3,
        answers: [
          { text: 'Писатель', id: 1 },
          { text: 'Музыкант', id: 2 },
          { text: 'Агент СБУ', id: 3 },
          { text: 'Просто чувак с бородой', id: 4 },
        ],
      },
      {
        id: 5,
        question: 'Где живет Вадим Е.',
        rightAnswerId: 1,
        answers: [
          { text: 'Житомир', id: 1 },
          { text: 'Улановка', id: 2 },
          { text: 'Бангладеш', id: 3 },
          { text: 'Киев', id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = answerId => {
    const { quiz, activeQuestion, answerState, results } = this.state;

    //Если ответ верный - выходим из функции
    if (answerState) {
      const key = Object.keys(answerState)[0];
      if (answerState[key] === 'success') {
        return;
      }
    }

    // Берем текущий вопрос (Вопрос[индекс по activeQuestion])
    const question = quiz[activeQuestion];

    // если правильный ответ = ответу, на который кликнули, то ставим статус
    // "success" и увел.индекс вопроса на 1 (переключаем его дальше)
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      const timeout = setTimeout(() => {
        // Если акт. в-с равен к-ву в-сов - тогда заканч. переключение в-сов)
        // А если нет - тогда увелич. значение акт.вопроса и выводим новый в-с
        if (activeQuestion + 1 === quiz.length) {
          this.setState({ isFinished: true });
        } else {
          this.setState(prevState => ({
            activeQuestion: prevState.activeQuestion + 1,
            answerState: null,
          }));
        }
        clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  };

  handleRetry = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  render() {
    const {
      quiz,
      activeQuestion,
      answerState,
      isFinished,
      results,
    } = this.state;
    const quizLength = quiz.length;

    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1 className={s.title}>Вопрос:</h1>

          {isFinished ? (
            <FinishedQuiz
              results={results}
              quiz={quiz}
              onRetry={this.handleRetry}
            />
          ) : (
            <ActiveQuiz
              quiz={quiz[activeQuestion]}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={quizLength}
              activeQuestion={activeQuestion + 1}
              state={answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;

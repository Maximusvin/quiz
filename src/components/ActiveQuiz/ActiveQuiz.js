import s from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const answers = [
  { text: 'Игрушка для покемонов' },
  { text: 'Фреймворк для Java' },
  { text: 'Библиотека для Node.js' },
  { text: 'Библиотека JavaScript' },
];

const ActiveQuiz = () => (
  <div className={s.activeQuiz}>
    <p className={s.question}>
      <span>
        <strong>{`2. `}</strong>
        Что такое React?
      </span>
      <small>4 из 12</small>
    </p>
    <AnswersList answers={answers} />
  </div>
);

export default ActiveQuiz;

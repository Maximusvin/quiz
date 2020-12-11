import s from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = ({
  quiz,
  onAnswerClick,
  quizLength,
  activeQuestion,
  state,
}) => (
  <div className={s.activeQuiz}>
    <p className={s.question}>
      <span>
        <strong>{`${activeQuestion} `}</strong>
        {quiz.question}
      </span>
      <small>
        {activeQuestion} из {quizLength}
      </small>
    </p>
    <AnswersList
      answers={quiz.answers}
      onAnswerClick={onAnswerClick}
      state={state}
    />
  </div>
);

export default ActiveQuiz;

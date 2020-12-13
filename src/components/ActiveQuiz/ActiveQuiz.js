import s from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
  return (
    <div className={s.activeQuiz}>
      <p className={s.question}>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>

        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;

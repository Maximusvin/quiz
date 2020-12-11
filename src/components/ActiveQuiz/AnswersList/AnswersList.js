import AnswerItem from './AnswerItem/AnswerItem';
import s from './AnswersList.module.css';

const AnswersList = ({ answers, onAnswerClick, state }) => (
  <ul className={s.answersList}>
    {answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={onAnswerClick}
          state={state ? state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;

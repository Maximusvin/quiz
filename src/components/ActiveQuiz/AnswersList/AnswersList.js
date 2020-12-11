import AnswerItem from './AnswerItem/AnswerItem';
import s from './AnswersList.module.css';

const AnswersList = ({ answers }) => (
  <ul className={s.answersList}>
    {answers.map((answer, index) => {
      return <AnswerItem key={index} answer={answer} />;
    })}
  </ul>
);

export default AnswersList;

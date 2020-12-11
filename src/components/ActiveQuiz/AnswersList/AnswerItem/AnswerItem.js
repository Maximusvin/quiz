import s from './AnswerItem.module.css';

const AnswerItem = ({ answer, onAnswerClick, state }) => {
  const cls = [s.answerItem];

  if (state) {
    cls.push(s[state]);
  }

  return (
    <li className={cls.join(' ')} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;

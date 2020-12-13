import s from './AnswerItem.module.css';

const AnswerItem = props => {
  const cls = [s.answerItem];

  if (props.state) {
    cls.push(s[props.state]);
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;

import s from './AnswerItem.module.css';

const AnswerItem = ({ answer }) => {
  return <li className={s.answerItem}>{answer.text}</li>;
};

export default AnswerItem;

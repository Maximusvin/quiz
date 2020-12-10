import s from './ActiveQuiz.module.css';

const ActiveQuiz = () => (
  <div className={s.activeQuiz}>
    <p className={s.question}>
      <span>
        <strong>{`2. `}</strong>
        Как дела?
      </span>
      <small>4 из 12</small>
    </p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
);

export default ActiveQuiz;

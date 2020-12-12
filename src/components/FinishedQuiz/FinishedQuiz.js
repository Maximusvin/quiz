import { IoClose, IoCheckmarkSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

import s from './FinishedQuiz.module.css';

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={s.finishedQuiz}>
      <ul>
        {quiz.map(({ id, question }, index) => {
          return (
            <li key={id}>
              <strong className={s.numberQuestion}>{index + 1}</strong>
              {question}

              {results[id] === 'error' ? (
                <IoClose className={s.error} />
              ) : (
                <IoCheckmarkSharp className={s.success} />
              )}
            </li>
          );
        })}
      </ul>

      <p className={s.result}>
        Правильно {successCount} из {quiz.length}
      </p>

      <div>
        <Button onClick={onRetry} type="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;

import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';

import s from './QuizList.module.css';

class QuizList extends Component {
  state = {
    quizes: [],
    isLoading: true,
  };

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json');
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      this.setState({
        quizes,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className={s.quizList}>
        <div>
          <h1>Список тестов</h1>

          {this.state.isLoading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

export default QuizList;

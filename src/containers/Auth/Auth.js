import { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import s from './Auth.module.css';

class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный Email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          mimLength: 6,
        },
      },
    },
  };

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = event => {
    event.preventDefault();
  };

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName} ${event.target.value}`);
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          rey={controlName + index}
          type={control.type}
          label={control.label}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={e => this.onChangeHandler(e, controlName)}
        />
      );
    });
  };

  render() {
    return (
      <div className={s.auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={s.authForm}>
            {this.renderInputs()}

            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>

            <Button type="primary" onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;

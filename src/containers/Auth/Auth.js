import { Component } from 'react';
import is from 'is_js';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import s from './Auth.module.css';

class Auth extends Component {
  state = {
    isFormValid: false,
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
        errorMessage: 'Введите корректный пароль (мин. 6 символов)',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD39l82wtm-DDdHgc93dmm6PooBlfmUK6Q',
        authData,
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD39l82wtm-DDdHgc93dmm6PooBlfmUK6Q',
        authData,
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  submitHandler = event => {
    event.preventDefault();
  };

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });
    this.setState({ formControls, isFormValid });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
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
        <div className={s.box}>
          <form onSubmit={this.submitHandler} className={s.authForm}>
            <h2>Авторизация</h2>

            {this.renderInputs()}
            <div className={s.controls}>
              <Button
                type="success"
                onClick={this.loginHandler}
                disabled={!this.state.isFormValid}
              >
                Войти
              </Button>

              <Button
                type="primary"
                onClick={this.registerHandler}
                disabled={!this.state.isFormValid}
              >
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;

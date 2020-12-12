import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import Backdrop from '../../UI/Backdrop/Backdrop';
import s from './Drawer.module.css';

const links = [
  { to: '/', label: 'Список', exact: true },
  { to: '/auth', label: 'Авторизация', exact: false },
  { to: '/quiz-creator', label: 'Создать тест', exact: false },
];

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={s.active}
          onClick={this.clickHandler}
        >
          {link.label}
        </NavLink>
      </li>
    ));
  };

  render() {
    const isOpenClass = !this.props.isOpen ? s.closeDrawer : s.drawer;
    const { isOpen } = this.props;

    return (
      <>
        <nav className={isOpenClass}>
          {isOpen && (
            <IoClose className={s.close} onClick={this.props.onClose} />
          )}
          <ul>{this.renderLinks()}</ul>
        </nav>
        {isOpen && <Backdrop onClick={this.props.onClose} />}
      </>
    );
  }
}

export default Drawer;

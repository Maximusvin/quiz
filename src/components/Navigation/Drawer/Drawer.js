import { Component } from 'react';
import { IoClose } from 'react-icons/io5';
import Backdrop from '../../UI/Backdrop/Backdrop';
import s from './Drawer.module.css';

const links = ['link1', 'link2', 'link3'];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <a>{link}</a>
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

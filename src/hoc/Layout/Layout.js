import { Component } from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

import s from './Layout.module.css';

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    const { menu } = this.state;
    const { children } = this.props;
    return (
      <div className={s.layout}>
        <Drawer isOpen={menu} onClose={this.menuCloseHandler} />

        <MenuToggle onToggle={this.toggleMenuHandler} isOpen={menu} />

        <main className={s.main}>{children}</main>
        <footer className={s.footer}>
          <p>Copyright © 2020</p>
          <p>Crafted by Maxim Kozlov</p>
        </footer>
      </div>
    );
  }
}

export default Layout;

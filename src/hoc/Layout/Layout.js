import { Component } from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

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

  render() {
    const { menu } = this.state;
    const { children } = this.props;
    return (
      <div className={s.layout}>
        <MenuToggle onToggle={this.toggleMenuHandler} isOpen={menu} />

        <main className={s.main}>{children}</main>
      </div>
    );
  }
}

export default Layout;

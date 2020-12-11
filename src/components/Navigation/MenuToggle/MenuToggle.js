import { GiHamburgerMenu } from 'react-icons/gi';

import s from './MenuToggle.module.css';

const MenuToggle = ({ isOpen, onToggle }) => {
  return (
    <>
      {!isOpen && (
        <GiHamburgerMenu className={s.menuToggle} onClick={onToggle} />
      )}
    </>
  );
};

export default MenuToggle;

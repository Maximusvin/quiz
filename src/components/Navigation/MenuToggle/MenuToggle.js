import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

import s from './MenuToggle.module.css';

const MenuToggle = ({ isOpen, onToggle }) => {
  return (
    <>
      {isOpen ? (
        <IoClose className={s.open} onClick={onToggle} />
      ) : (
        <GiHamburgerMenu className={s.menuToggle} onClick={onToggle} />
      )}
    </>
  );
};

export default MenuToggle;

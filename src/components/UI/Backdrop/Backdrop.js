import s from './Backdrop.module.css';

const Backdrop = ({ onClick }) => {
  return <div className={s.backdrop} onClick={onClick}></div>;
};

export default Backdrop;

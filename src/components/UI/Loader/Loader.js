import s from './Loader.module.css';

const Loader = () => (
  <div className={s.center}>
    <div className={s.loader}>
      <div />
      <div />
    </div>
  </div>
);

export default Loader;

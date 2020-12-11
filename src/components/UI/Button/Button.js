import s from './Button.module.css';

const Button = ({ children, type, onClick, disabled }) => {
  const cls = [s.button, s[type]];

  return (
    <button
      onClick={onClick}
      className={cls.join(' ')}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;

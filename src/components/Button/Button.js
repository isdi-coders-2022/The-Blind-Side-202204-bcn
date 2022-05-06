const Button = ({ text, nameClass, action }) => {
  return (
    <button onClick={action} className={nameClass}>
      {text}
    </button>
  );
};

export default Button;

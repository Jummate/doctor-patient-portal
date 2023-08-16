const Button = ({ type = "button", text, onClick, extraStyles }) => {
  return (
    <button
      type={type}
      className={`${
        extraStyles ? extraStyles : ""
      } bg-cyan-600 text-white py-3 px-7 rounded-md hover:opacity-75 font-bold `}
    >
      {text}
    </button>
  );
};

export default Button;

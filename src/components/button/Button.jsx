const Button = ({ type = "text", text, onClick }) => {
  return (
    <button
      type={type}
      className="bg-cyan-600 text-white p-3 px-7 rounded-md hover:opacity-75 font-bold"
    >
      {text}
    </button>
  );
};

export default Button;

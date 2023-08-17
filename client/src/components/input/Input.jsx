const Input = ({
  type = "text",
  placeholder,
  extraStyles,
  ariaLabel,
  id,
  name,
}) => {
  return (
    <input
      type={type}
      id={`${id ? id : null}`}
      name={`${(type = "radio")} ? ${name} : null`}
      placeholder={placeholder}
      aria-label={`${ariaLabel ? ariaLabel : null}`}
      className={`p-3 text-sky-900 ${extraStyles ? extraStyles : ""}`}
    ></input>
  );
};

export default Input;

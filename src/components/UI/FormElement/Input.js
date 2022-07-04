const Input = (props) => {
  const errorBox = {
    border: "2px solid red",
    backgroundColor: "#fddddd",
  };

  const normalBox = {
    border: "2px solid rgb(36, 32, 32)",
  };

  return (
    <div>
      {props.type === "textarea" && (
        <textarea
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          style={props.errorStyling ? errorBox : normalBox}
        />
      )}
      {props.type !== "textarea" && (
        <input
          id={props.id}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          style={props.errorStyling ? errorBox : normalBox}
        />
      )}
    </div>
  );
};

export default Input;

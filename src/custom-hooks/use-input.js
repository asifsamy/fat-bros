import { useState } from "react";

const useInput = (validationValue, initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validationValue(inputValue);
  const hasError = !inputIsValid && inputIsTouched;

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: inputIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

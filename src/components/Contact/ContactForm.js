// import emailjs from "emailjs-com";
import useInput from "../../custom-hooks/use-input";
import Input from "../UI/FormElement/Input";
import classes from "./ContactForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  value.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const ContactForm = () => {
  const {
    value: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: subjectInputValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectInputBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);

  const {
    value: messageInputValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(
      nameInputValue,
      emailInputValue,
      subjectInputValue,
      messageInputValue
    );
    /*
    emailjs
      .sendForm(
        "service_x99ip57",
        "template_71vebom",
        event.currentTarget,
        "user_wDtFNHZTDhxHpoCO08gNH"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!", {
            position: "top-right",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("An Error Occured! ", {
            position: "top-right",
          });
        }
      );
    */

    resetName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.control}>
      <legend>Wir würden uns freuen, von Ihnen zu hören!</legend>
      <Input
        type="text"
        placeholder="Name"
        id="name"
        onChange={nameChangeHandler}
        onBlur={nameInputBlurHandler}
        value={nameInputValue}
        errorStyling={nameHasError}
      />
      {nameHasError && (
        <p className={classes["error-text"]}>Name darf nicht leer sein!</p>
      )}
      <Input
        type="email"
        placeholder="Email"
        id="eamail"
        onChange={emailChangeHandler}
        onBlur={emailInputBlurHandler}
        value={emailInputValue}
        errorStyling={emailHasError}
      />
      {emailHasError && (
        <p className={classes["error-text"]}>
          Bitte geben Sie eine gültige Email-Adresse ein!
        </p>
      )}
      <Input
        type="text"
        placeholder="Subject"
        id="subject"
        onChange={subjectChangeHandler}
        onBlur={subjectInputBlurHandler}
        value={subjectInputValue}
        errorStyling={subjectHasError}
      />
      {subjectHasError && (
        <p className={classes["error-text"]}>Name darf nicht leer sein!</p>
      )}
      <Input
        type="textarea"
        placeholder="Type your message here..."
        id="message"
        onChange={messageChangeHandler}
        onBlur={messageInputBlurHandler}
        value={messageInputValue}
        errorStyling={messageHasError}
      />
      {messageHasError && (
        <p className={classes["error-text"]}>Bitte schreiben Sie etwas!</p>
      )}
      <button type="submit">Senden</button>
    </form>
  );
};

export default ContactForm;

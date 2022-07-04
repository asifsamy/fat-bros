import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <h2>Kontaktiere Uns</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;

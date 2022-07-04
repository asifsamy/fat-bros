import classes from "./Section.module.css";
const Section = (props) => {
  return (
    <section
      className={`${classes.section} ${
        props.classProps ? props.classProps : ""
      }`}
    >
      {props.children}
    </section>
  );
};

export default Section;

import { Fragment } from "react";
import { FcCheckmark } from "react-icons/fc";

const BarInfo = () => {
  return (
    <Fragment>
      <h6>Telefonnummer</h6>
      <p>(714) 837-5390</p>
      <h6>Adresse</h6>
      <h2>3649 S Las Vegas Blvd Ste 618 Las Vegas, NV 89109</h2>
      <h6>Öffnungszeit</h6>
      <p>
        <strong>Mon</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
        <strong>Dien</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
        <strong>Mitt</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
        <strong>Donn</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
        <strong>Frei</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
        <strong>Sams</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
        <strong>Sonn</strong>&nbsp; 10:00 Uhr - 23:00 Uhr
        <br />
      </p>
      <h6>Nützlich zu wissen</h6>
      <p>
        <FcCheckmark size="1.4vw" /> Parkplätze vorhanden
        <br />
        <FcCheckmark size="1.4vw" /> Barrierefrei
        <br />
        <FcCheckmark size="1.4vw" /> Kinderfreundlich
        <br />
        <FcCheckmark size="1.4vw" /> Sitzplätze im Freien
        <br />
        <FcCheckmark size="1.4vw" /> Mitnahme
        <br />
        <FcCheckmark size="1.4vw" /> Akzeptiert Kreditkarten
        <br />
      </p>
    </Fragment>
  );
};

export default BarInfo;

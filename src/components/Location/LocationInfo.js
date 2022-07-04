import { MdCall } from "react-icons/md";
import classes from "./LocationInfo.module.css";

const LocationInfo = ({ panTo, mapData }) => {
  return (
    <div className={classes["map-info"]}>
      {/* <h3 onClick={mapHandler}>Harburg - Hamburg - Hamburg</h3> */}
      <h3 onClick={() => panTo(mapData.latLng)}>{mapData.title}</h3>
      <p>
        Open today <strong>10:30 am - 12:00am</strong>
      </p>
      <h6>5446.4 miles away</h6>
      <p>
        {mapData.address1}
        <br />
        {mapData.address2}
      </p>
      <div className={classes.call}>
        <MdCall color="rgba(49, 63, 63, 0.87)" size="1vw" /> &nbsp;&nbsp;
        <p>{mapData.phone}</p>
      </div>
      <button type="button">Order Pickup</button>
      <button type="button">Order Delivery</button>
    </div>
  );
};

export default LocationInfo;

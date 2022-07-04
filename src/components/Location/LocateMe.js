import { IoIosSend } from "react-icons/io";

const LocateMe = ({ panTo }) => {
  return (
    <button
      type="button"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <IoIosSend size="1.15vw" />
      &nbsp;My Location
    </button>
  );
};

export default LocateMe;

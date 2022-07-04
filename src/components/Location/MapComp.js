import { useCallback, useRef, useState } from "react";
import {
  // useJsApiLoader,
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import classes from "./MapComp.module.css";
import LocationInfo from "./LocationInfo";
import LocateMe from "./LocateMe";
import Search from "./Search";
import { MapData } from "../../DataFiles/MapData";

const markerDetail = (
  <p>
    Monday: 11:30 am - 12:00 am
    <br />
    Tuesday: 11:30 am - 12:00 am
    <br />
    Wednesday: 11:30 am - 12:00 am
    <br />
    Thursday: 11:30 am - 12:00 am
    <br />
    Friday: 11:30 am - 2:00 am
    <br />
    Saturday: 11:30 am - 2:00 am
    <br />
    Sunday: 11:30 am - 2:00 am
  </p>
);

let center;
navigator.geolocation.getCurrentPosition((position) => {
  center = { lat: position.coords.latitude, lng: position.coords.longitude };
});

const libraries = ["places"];

const MapComp = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  // const [location, setLocation] = useState(/** @type google.maps.Map */ (null));
  const [selected, setSelected] = useState(null);

  if (!isLoaded) {
    return <h3>Loading...</h3>;
  }
  if (loadError) {
    return <h5>Error loading maps</h5>;
  }

  return (
    <section className={classes.location}>
      <div className={classes["location-input"]}>
        <p>Shops in der Nähe: </p>
        <LocateMe panTo={panTo} />
        <Search currLocation={center} panTo={panTo} />
      </div>
      <section className={classes["sub-location"]}>
        <div>
          {MapData.map((data, index) => (
            <LocationInfo panTo={panTo} mapData={data} key={index} id={index} />
          ))}
        </div>
        <div className={classes.frame}>
          <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              // zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={onMapLoad}
          >
            {MapData.map((data, index) => (
              <Marker
                position={data.latLng}
                onClick={() => setSelected(center)}
                key={index}
                id={index}
              />
            ))}
            {selected ? (
              <InfoWindow
                position={{ lat: center.lat, lng: selected.lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h2>Opening hours</h2>
                  {markerDetail}
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
      </section>
    </section>
  );
};

export default MapComp;

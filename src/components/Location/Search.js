import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Search = ({ currLocation, panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => currLocation.lat, lng: () => currLocation.lng },
      radius: 200 * 1000,
    },
  });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Gib eine Adresse ein"
      />
      <ul>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <li
              key={id}
              onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions();
                try {
                  const results = await getGeocode({ address });
                  const { lat, lng } = await getLatLng(results[0]);
                  panTo({ lat, lng });
                  // console.log(results[0]);
                } catch (error) {
                  console.log("error!");
                }
              }}
            >
              {description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;

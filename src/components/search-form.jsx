import { MapPinIcon, SearchIcon } from "./icons";
import PropTypes from 'prop-types';

function SearchForm({ city, setCity, handleSubmit }) {
  return (
    <form
        className="flex gap-4 justify-between items-center rouunder-xl border border-white/30 p-2 text-2xl"
        onSubmit={handleSubmit}
    >
      <MapPinIcon />
      <input
        type="text"
        className="bg-transparent border-none outline-none w-full placeholder:text-white/50"
        placeholder="city"
        value={city}
        onChange={({target}) => setCity(target.value)}
        />
      <button
        type="submit"
        className="bg-transparent border-none ouutline-none p-2 rounded-full hove:bg-white/20">
        <SearchIcon />
      </button>
    </form>
  );
}
SearchForm.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
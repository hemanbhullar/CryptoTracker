import { useState } from 'react';
import styles from './SearchBar.module.css';
import { fetchSearchData } from '../../services/FetchSearchData';
import { useDebounce } from '../Hooks/UseDebounce';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
  const [suggestions, setSuggestions] = useState([]); // This is where we'll store the retrieved suggestions
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const findResult = (id) => {
    setResult(suggestions.find((suggestion) => suggestion.id === id));
  };

  function handleCoinRedirect(id){
    navigate(`/details/${id}`)
  }

  useDebounce(
    async () => {
      try{
        fetchSearchData(value, setSuggestions);
      } catch(error){
        console.log(error);
      }
    },1000,
  [value]);

  return (
    <>
      <div className={styles.container}>
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={async () => {
            setTimeout(() => {
              setHideSuggestions(true);
            }, 1000);
          }}
          type="text"
          className={styles.textbox}
          placeholder="Search data..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion) => (
            <div
              className={styles.suggestion}
              onClick={() => findResult(suggestion.id)}
            >
              <div onClick={() => handleCoinRedirect(suggestion.id)}>
                {suggestion.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
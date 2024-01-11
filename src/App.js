import { useState } from "react";

import nameList from "./names.json";
import Pokemon from "./components/Pokemon";

function App() {
  const [value, setValue] = useState("");
  const [loadCount, setLoadCount] = useState(60);

  const types = ["normal", "fire", "water", "electric", "grass", "ice" ,"fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]

  const searchOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="search">
        <div className="search-group">
          <input
            className="search-bar"
            type="text"
            value={value}
            onChange={searchOnChange}
            placeholder="Find a Pokemon"
          />
        </div>
      </div>
      <div className="selections">
        <div className="select">
          <button>Gen 1</button>
          <button>Gen 2</button>
          <button>Gen 3</button>
          <button>Gen 4</button>
          <button>Gen 5</button>
          <button>Gen 6</button>
          <button>Gen 7</button>
          <button>Gen 8</button>

        </div>
        <div className="select">
          {types.map((type) => {
            return <button>{type}</button>
          })}
        </div>
      </div>

      <div className="pokemons">
        <div className="pokemons-content">
          {nameList.results
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const itemTerm = item.name.toLowerCase();
              return (
                itemTerm.startsWith(searchTerm) 
                // itemTerm === itemTerm.split("-")[0]
              );
            })
            .slice(0, loadCount)
            .map((item) => (
              <Pokemon name={item.name.toLowerCase()} key={item.name} />
            ))}
        </div>
      </div>

      <div className="footer">
        <button
          className="load-count"
          onClick={() => setLoadCount(loadCount + 60)}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;

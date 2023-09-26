import { useState } from 'react';

import nameList from './names.json'
import Pokemon from './components/Pokemon';
import Dropdown from './components/Dropdown';


function App() {
  const [value, setValue] = useState('')
  const [loadCount, setLoadCount] = useState(128)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="App">
        <Dropdown />

      <div className='search'>

        <div className='search-group'>
          <input className='search-bar' type='text' value={value} onChange={onChange} placeholder='Find a Pokemon' />
        </div>
      </div>

      <div className='pokemons'>
        <div className='pokemons-content'>
          {nameList.results.filter(item => {
              const searchTerm = value.toLowerCase()
              const itemTerm = item.name.toLowerCase()
              return itemTerm.startsWith(searchTerm) && itemTerm === itemTerm.split('-')[0]
            }).slice(0, loadCount)
            .map((item) => (
              <Pokemon name={item.name.toLowerCase()} key={item.name} />
            ))}
        </div>
      </div>

      <div className='footer'>
        <button className='load-count' onClick={() => setLoadCount(loadCount + 128)}>Load More</button>
      </div>
    </div>
  );
}

export default App;

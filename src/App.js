// Importing necessary dependencies and components
import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

// Main App component
function App() {
  // State to store characters data received from the API
  const [characters, setCharacters] = useState(null); 

  // Asynchronous function to fetch data from the Rick and Morty API
  const reqApi = async () => {
    // Fetching data from the API
    const api = await fetch('https://rickandmortyapi.com/api/character');
    // Parsing the response as JSON
    const characterApi = await api.json();

    // Setting the characters state with the results from the API
    setCharacters(characterApi.results);
    console.log(characterApi)
  }

  // Render the UI
  return (
    <div className="App">
      <header className="App-header">
        {/* Title */}
        <h1 className="title">Rick & Morty</h1>

        {/* Conditional rendering based on whether characters data is available */}
        {characters ? (
          // If characters data is available, render the Characters component
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          // If characters data is not available, show the image and a button to fetch data
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' /> 
            <button onClick={reqApi} className="btn-search">
              Search Characters
            </button>
          </>
        )}
      </header>
    </div>
  );
}

// Exporting the App component as the default export
export default App;


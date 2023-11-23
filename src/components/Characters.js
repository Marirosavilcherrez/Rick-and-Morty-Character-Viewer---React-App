// Functional component to display the list of characters
export default function Characters(props) {
    // Destructuring props to get characters and setCharacters
    const { characters, setCharacters } = props;
  
    // Function to reset characters state, bringing the user back to the home view
    const resetCharacters = () => {
      setCharacters(null);
    }
  
    // Rendering the UI for the Characters component
    return (
      <div className="characters">
  
        {/* Header for the Characters component */}
        <h1>Characters</h1>
  
        {/* Button to go back to the home view */}
        <span className="back-home" onClick={resetCharacters}>Back to Home</span>
  
        {/* Container for displaying individual character information */}
        <div className="container-characters">
          {/* Mapping through the characters array to display each character */}
          {characters.map((character, index) => (
            <div className="character-container" key={index}>
              {/* Displaying character image */}
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              {/* Displaying character details */}
              <div>
                <h3>{character.name}</h3>
                <h6>
                  {/* Displaying character status (Alive/Dead) */}
                  {character.status === "Alive" ? (
                    <>
                      <span className="alive" />
                      Alive
                    </>
                  ) : (
                    <>
                      <span className="dead" />
                      Dead
                    </>
                  )}
                </h6>
                {/* Displaying the number of episodes the character has appeared in */}
                <p>
                  <span className="text-grey">Episodes: </span>
                  <span>{character.episode.length}</span>
                </p>
                {/* Displaying the species of the character */}
                <p>
                  <span className="text-grey">Species: </span>
                  <span>{character.species}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Button to go back to the home view */}
        <span className="back-home" onClick={resetCharacters}>Back to Home</span>
      </div>
    );
  }
  
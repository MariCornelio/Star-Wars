import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CharacterContext = createContext();
export const CharacterContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchCharacters(currentPage) {
    try {
      let current = 1;
      if (currentPage) {
        current = currentPage;
      }
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${current}`
      );
      const data = await response.json();
      const charactersWithDetails = await Promise.all(
        data.results.map(async (character, index) => {
          const homeworldResponse = await fetch(character.homeworld);
          const homeworldData = await homeworldResponse.json();

          const speciesResponses = await Promise.all(
            character.species.map(async (speciesURL) => {
              const speciesResponse = await fetch(speciesURL);
              return speciesResponse.json();
            })
          );
          const vehiclesResponses = await Promise.all(
            character.vehicles.map(async (vehiclesURL) => {
              const vehiclesResponse = await fetch(vehiclesURL);
              return vehiclesResponse.json();
            })
          );

          return {
            ...character,
            homeworld: homeworldData,
            species: speciesResponses,
            vehicles: vehiclesResponses,
            id: index + '' + current,
          };
        })
      );
      if (current === 1) {
        setCharacters(charactersWithDetails);
      } else {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...charactersWithDetails,
        ]);
      }

      setLoader(false);
      if (!data.next) {
        setHasMore(false);
      }
    } catch (error) {
      setLoader(false);
      console.log('aqui desde el error');
      setMessageError(true);
    }
  }

  const loadMoreCharacters = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCharacters(nextPage);
  };

  const detailsCharacterId = (characterId) => {
    const characterFilter = characters.filter(
      (character) => character.id === characterId
    );
    setCharacter(characterFilter[0]);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        loader,
        messageError,
        detailsCharacterId,
        character,
        loadMoreCharacters,
        hasMore,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

CharacterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

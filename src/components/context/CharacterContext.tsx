import { createContext, useState, useEffect, FC } from 'react';
import PropTypes from 'prop-types';
import { CharacterContextProviderProps } from '../../interfaces/characterContextprovider.interface';
import { Character } from '../../interfaces/character.interface';
import { CharacterResponse } from '../../interfaces/characterResponse.interface';
import { CharacterContextType } from '../../interfaces/characterContext.interface';

// export const CharacterContext = createContext();
export const CharacterContext = createContext<CharacterContextType>({
  characters: [],
  loader: false,
  messageError: false,
  detailsCharacterId: () => {},
  loadMoreCharacters: () => {},
  hasMore: true,
});

export const CharacterContextProvider: FC<CharacterContextProviderProps> = (
  props
) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character | undefined>();
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchCharacters(currentPage: number = 1) {
    try {
      const current: number = currentPage;
      // if (currentPage) {
      //   current = currentPage;
      // }
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${current}`
      );
      const data = await response.json();
      const charactersWithDetails: Character[] = await Promise.all(
        data.results.map(
          async (character: CharacterResponse, index: number) => {
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
          }
        )
      );
      if (current === 1) {
        setCharacters(charactersWithDetails);
      } else {
        setCharacters((prevCharacters: Character[]) => [
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
    const nextPage: number = page + 1;
    setPage(nextPage);
    fetchCharacters(nextPage);
  };

  const detailsCharacterId = (characterId: string) => {
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

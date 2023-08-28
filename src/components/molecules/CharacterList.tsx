import { PersonCell } from '../atoms/PersonCell';
import { useContext } from 'react';
import './CharacterList.css';
import { CharacterContext } from '../context/CharacterContext';
import { LoadingCell } from './LoadingCell';
import { NoticeCell } from '../atoms/NoticeCell';
import InfiniteScroll from 'react-infinite-scroll-component';
export const CharacterList = () => {
  const { characters, messageError, loadMoreCharacters, hasMore } =
    useContext(CharacterContext);
  return (
    <section className="characterList_section">
      <InfiniteScroll
        dataLength={characters.length}
        next={loadMoreCharacters}
        hasMore={hasMore}
        loader={messageError ? null : <LoadingCell />}
      >
        {messageError ? (
          <NoticeCell />
        ) : (
          characters.map((character, i) => (
            <PersonCell key={i} character={character} />
          ))
        )}
        {/* {characters.map((character, i) => (
          <PersonCell key={i} character={character} />
        ))} */}
      </InfiniteScroll>
    </section>
  );
};

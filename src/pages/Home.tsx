// import { DataCell } from '../components/atoms/DataCell';
// import { LoadingIndicator } from '../components/atoms/LoadingIndicator';
// import { NoticeCell } from '../components/atoms/NoticeCell';
// import { PersonCell } from '../components/atoms/PersonCell';
// import { useState, useEffect } from 'react';
import { SectionHeader } from '../components/atoms/SectionHeader';
import { CharacterList } from '../components/molecules/CharacterList';
import { DetailsCharacter } from '../components/molecules/DetailsCharacter';
import './Home.css';
// import { LoadingCell } from '../components/molecules/LoadingCell';
function Home() {
  return (
    <>
      <SectionHeader />
      <article className="home_article">
        <CharacterList />
        <DetailsCharacter />
      </article>
    </>
  );
}

export default Home;

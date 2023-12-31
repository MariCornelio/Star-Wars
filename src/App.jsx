import './App.css';

import { CharacterList } from './components/molecules/CharacterList';
import { DetailsCharacter } from './components/molecules/DetailsCharacter';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { SectionHeader } from './components/atoms/SectionHeader';

import { useContext } from 'react';
import { CharacterContext } from './components/context/CharacterContext';

const App = () => {
  const isSmallScreen = window.innerWidth <= 550;
  const { character } = useContext(CharacterContext);
  return (
    <Router>
      <Routes>
        {isSmallScreen ? (
          <Route
            exec
            path="/"
            element={
              <>
                <SectionHeader /> <CharacterList />
              </>
            }
          />
        ) : (
          <Route exact path="/" element={<Home />} />
        )}
        {/* <Route
          path="/details"
          element={
            <>
              <SectionHeader />
              <DetailsCharacter />
            </>
          }
        /> */}
        {Object.keys(character).length === 0 ? (
          <Route
            path="/details"
            element={
              <>
                <SectionHeader /> <CharacterList />
              </>
            }
          />
        ) : (
          <Route
            path="/details"
            element={
              <>
                <SectionHeader />
                <DetailsCharacter />
              </>
            }
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;

import './App.css';

import { CharacterList } from './components/molecules/CharacterList';
import { DetailsCharacter } from './components/molecules/DetailsCharacter';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { SectionHeader } from './components/atoms/SectionHeader';

const App = () => {
  const isSmallScreen = window.innerWidth <= 550;
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
        <Route
          path="/details"
          element={
            <>
              <SectionHeader />
              <DetailsCharacter />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

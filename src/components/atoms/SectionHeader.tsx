import './SectionHeader.css';
import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
export const SectionHeader = () => {
  const navigate = useNavigate();
  const { character } = useContext(CharacterContext);
  const path = location.pathname;
  const size = window.innerWidth <= 550;
  return (
    <section className="sectionHeader_section">
      {!character || (path === '/' && size) ? (
        <h2>People of Star Wars</h2>
      ) : (
        <div className="sectionHeader_div">
          <i
            className={size ? 'block fa-solid fa-arrow-left' : 'none'}
            onClick={() => {
              navigate('/');
            }}
          ></i>
          <h2>{character.name}</h2>
        </div>
      )}
    </section>
  );
};
SectionHeader.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
  }),
};

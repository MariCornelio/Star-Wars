import { CharacterContext } from '../context/CharacterContext';
import { useContext } from 'react';
import './PersonCell.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../interfaces/character.interface';

export const PersonCell = ({ character }: { character: Character }) => {
  const { detailsCharacterId } = useContext(CharacterContext);
  const navigate = useNavigate();
  const isSmallScreen = window.innerWidth <= 550;
  const species =
    character.species.length > 0 ? character.species[0].name : 'Human';
  return (
    <div
      className="personCell_div"
      onClick={() => {
        if (character.id) {
          detailsCharacterId(character.id);
          if (isSmallScreen) {
            navigate('/details');
          }
        }
      }}
    >
      <div>
        <h2>{character.name}</h2>
        <p>
          {species}
          {' from '}
          {character.homeworld.name}
        </p>
      </div>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

PersonCell.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    homeworld: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    species: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    vehicles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

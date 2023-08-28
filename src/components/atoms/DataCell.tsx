import './DataCell.css';
import PropTypes from 'prop-types';
import {  Character} from '../../interfaces/character.interface';
export const DataCell = ({ character }:{ character: Character }) => {
  return (
    <>
      <div className="dataCell_div">
        <h2>Eye Color</h2>
        <h2>
          {character.eye_color.charAt(0).toUpperCase() +
            character.eye_color.slice(1)}
        </h2>
      </div>
      <div className="dataCell_div">
        <h2>Hair Color</h2>
        <h2>
          {character.hair_color.charAt(0).toUpperCase() +
            character.hair_color.slice(1)}
        </h2>
      </div>
      <div className="dataCell_div">
        <h2>Skin Color</h2>
        <h2>
          {character.skin_color.charAt(0).toUpperCase() +
            character.skin_color.slice(1)}
        </h2>
      </div>
      <div className="dataCell_div">
        <h2>Birth Year</h2>
        <h2>{character.birth_year}</h2>
      </div>
    </>
  );
};

DataCell.propTypes = {
  character: PropTypes.shape({
    eye_color: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    birth_year: PropTypes.string,
    vehicles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

import './DataVehicles.css';
import PropTypes from 'prop-types';
import { Character } from '../../interfaces/character.interface';
export const DataVehicles = ({ character }: { character: Character }) => {
  return (
    <div className="dataVehicles_div">
      {character.vehicles.length === 0 ? (
        <h2>No vehicles</h2>
      ) : (
        character.vehicles.map((vehicle, i) => <h2 key={i}>{vehicle.name}</h2>)
      )}
    </div>
  );
};
DataVehicles.propTypes = {
  character: PropTypes.shape({
    vehicles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

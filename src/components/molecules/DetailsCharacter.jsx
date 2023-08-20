import { DataCell } from '../atoms/DataCell';
import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import './DetailsCharacter.css';
import { DataVehicles } from '../atoms/DataVehicles';
export const DetailsCharacter = () => {
  const { character } = useContext(CharacterContext);
  return (
    <section className="detailsCharacter_section">
      {Object.keys(character).length !== 0 ? (
        <div>
          <h2>General Information</h2>
          <DataCell character={character} />
          <h2>Vehicles</h2>
          <DataVehicles character={character} />
        </div>
      ) : null}
    </section>
  );
};

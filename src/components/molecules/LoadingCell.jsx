import './LoadingCell.css';
import { LoadingIndicator } from '../atoms/LoadingIndicator';

export const LoadingCell = () => {
  return (
    <div className="loadingCell_div">
      <LoadingIndicator />
    </div>
  );
};

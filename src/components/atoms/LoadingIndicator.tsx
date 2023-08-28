import './LoadingIndicator.css';
import spinnerImage from '../../assets/spinning-circles.svg';
export const LoadingIndicator = () => {
  return (
    <div className="loader">
      <img src={spinnerImage} alt="loader" />
      <h2>Loading</h2>
    </div>
  );
};

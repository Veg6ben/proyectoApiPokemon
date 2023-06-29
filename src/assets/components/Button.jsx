import "../sass/Button.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ icon, handleClick }) => {
  return (
    <div className="button__box">
      <button className="button" onClick={handleClick}>
        {icon} 
      </button>
      <div className="button__shadow"></div>
    </div>
  );
};

export { Button };

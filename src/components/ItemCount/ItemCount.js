import "./itemCount.css";

export const ItemCount = ({ max, min = 0, counter, setCounter }) => {
  const handleSumar = () => {
    counter < max && setCounter(counter + 1);
  };
  const handleRestar = () => {
    counter > min && setCounter(counter - 1);
  };

  return (
    <div>
      <button
        className="btn btn-outline-dark m-2 "
        disabled={counter === min}
        onClick={handleRestar}
      >
        -
      </button>
      <span className="m-2">{counter}</span>
      <button
        className="btn btn-outline-dark m-2 "
        disabled={counter === max}
        onClick={handleSumar}
      >
        +
      </button>
      <p className={counter === max ? "mostrar" : "noMostrar"}>Sin mas stock</p>
    </div>
  );
};

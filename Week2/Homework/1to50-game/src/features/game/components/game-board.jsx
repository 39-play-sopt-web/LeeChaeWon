import NumberCell from './number-cell';

const GameBoard = ({ numbers, gridSize, onNumberClick }) => {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {numbers.map((number, index) =>
        number === null ? (
          <div key={index} className="aspect-square" />
        ) : (
          <NumberCell
            key={index}
            number={number}
            onClick={() => onNumberClick(number)}
          />
        ),
      )}
    </div>
  );
};

export default GameBoard;
import NumberCell from './number-cell';

const GameBoard = ({ numbers, gridSize, onNumberClick }) => {
  return (
    <div
      className="grid aspect-square h-full max-h-full max-w-full gap-2"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {numbers.map((number, index) =>
        number === null ? (
          <div key={index} className="border border-border" />
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
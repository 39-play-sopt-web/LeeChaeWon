import NumberCell from './number-cell';

const GameBoard = ({numbers, gridSize, onNumberClick}) => {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {numbers.map((number) => (
        <NumberCell
          key={number}
          number={number}
          onClick={() => onNumberClick(number)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
import GameBoard from './components/game-board';
import useGame from './hooks/use-game';

const GamePage = ({ level, startTimer, stopTimer }) => {
  const {
    gridSize,
    maxNumber,
    nextNumber,
    numbers,
    handleNumberClick,
  } = useGame(level, startTimer, stopTimer)

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-4 py-8">
      <div className="flex items-center gap-2">
        <p className="text-body-01 text-text-secondary">
          다음 숫자
        </p>

        <p className="text-heading-01 text-text-primary">
          {nextNumber > maxNumber ? '완료!' : nextNumber}
        </p>

        <p className="text-body-01 text-text-secondary">
          ({Math.min(nextNumber, maxNumber)}/{maxNumber})
        </p>
      </div>

      <GameBoard
        numbers={numbers}
        gridSize={gridSize}
        onNumberClick={handleNumberClick}
      />
    </main>
  );
};

export default GamePage;
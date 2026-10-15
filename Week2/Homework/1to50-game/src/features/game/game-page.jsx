import GameBoard from './components/game-board';
import useGame from './hooks/use-game';
import GameCompleteModal from './components/game-complete-modal';

const GamePage = ({ level, startTimer, stopTimer, resetTimer }) => {
  const {
    gridSize,
    maxNumber,
    nextNumber,
    numbers,
    handleNumberClick,
    isModalOpen,
    finalTime,
    closeModal,
    resetGame,
  } = useGame(level, startTimer, stopTimer, resetTimer)

  const handleModalConfirm = () => {
    resetGame();
    closeModal();
  }

  return (
    <>
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

      <GameCompleteModal
        isOpen={isModalOpen}
        finalTime={finalTime}
        onConfirm={handleModalConfirm}
      />
    </>

  );
};

export default GamePage;
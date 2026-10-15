import { useState } from 'react';
import GameBoard from './components/game-board';
import { GAME_CONFIG } from './constants/game-config';
import createNumbers from './utils/create-numbers';

const GamePage = ({ level, startTimer, stopTimer }) => {
  const { gridSize, maxNumber } = GAME_CONFIG[level];

  const [nextNumber, setNextNumber] = useState(1);

  // 처음 게임판에 표시할 숫자 관리
  const [numbers, setNumbers] = useState(() => createNumbers(1, gridSize * gridSize));

  // 게임 시작 후 표시할 숫자 관리
  const [remainingNumbers, setRemainingNumbers] = useState(() =>
    createNumbers(gridSize * gridSize +1, maxNumber),
  );

  const handleNumberClick = (number) => {
    if (number !== nextNumber) {
      return;
    }

    if (number === 1) {
      startTimer();
    }

    if (number === maxNumber) {
      stopTimer();
    }
    
    // 새로 등장시킬 숫자가 남아 있다면
    if (remainingNumbers.length > 0) {
      const replacementNumber = remainingNumbers[0];

      // 클릭한 숫자가 있던 칸을 새 숫자로 교체
      setNumbers((currentNumbers) =>
        currentNumbers.map((currentNumber) =>
          currentNumber === number ? replacementNumber : currentNumber,
        ),
      );

      // 사용한 숫자는 목록에서 제거
      setRemainingNumbers((currentNumbers) => currentNumbers.slice(1));
    }  else {
      // 교체할 숫자가 없으면 해당 칸의 숫자만 비우기
      setNumbers((currentNumbers) =>
        currentNumbers.map((currentNumber) =>
          currentNumber === number ? null : currentNumber,
        ),
      );
    }

    setNextNumber((currentNumber) => currentNumber + 1);
  };

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-4 py-8">
      <p className="text-body-01 text-text-secondary">
        다음 숫자: {nextNumber}
      </p>

      <GameBoard
        numbers={numbers}
        gridSize={gridSize}
        onNumberClick={handleNumberClick}
      />
    </main>
  );
};

export default GamePage;
import { useState } from 'react';
import { GAME_CONFIG } from '../constants/game-config';
import createNumbers from '../utils/create-numbers';

const useGame = (level, { onStart, onComplete }) => {
  const { gridSize, maxNumber } = GAME_CONFIG[level];

  const [nextNumber, setNextNumber] = useState(1);

  // 처음 게임판에 표시할 숫자
  const [numbers, setNumbers] = useState(() =>
    createNumbers(1, gridSize * gridSize),
  );

  // 게임 시작 후 표시할 숫자
  const [remainingNumbers, setRemainingNumbers] = useState(() =>
    createNumbers(gridSize * gridSize + 1, maxNumber),
  );

  const resetGame = () => {
    setNextNumber(1);
    setNumbers(createNumbers(1, gridSize * gridSize));
    setRemainingNumbers(createNumbers(gridSize*gridSize + 1, maxNumber));
  };

  const handleNumberClick = (number) => {
    if (number !== nextNumber) {
      return;
    }

    if (number === 1) {
      onStart();
    }

    if (number === maxNumber) {
      onComplete();
    }

    // 새로 등장시킬 숫자가 남아 있다면 클릭한 숫자를 새 숫자로 교체
    if (remainingNumbers.length > 0) {
      const replacementNumber = remainingNumbers[0];

      setNumbers((currentNumbers) =>
        currentNumbers.map((currentNumber) =>
          currentNumber === number ? replacementNumber : currentNumber,
        ),
      );

      setRemainingNumbers((currentNumbers) => currentNumbers.slice(1));
    } else {
      // 교체할 숫자가 없으면 해당 칸의 숫자만 비우기
      setNumbers((currentNumbers) =>
        currentNumbers.map((currentNumber) =>
          currentNumber === number ? null : currentNumber,
        ),
      );
    }

    setNextNumber((currentNumber) => currentNumber + 1);
  };

  return {
    gridSize,
    maxNumber,
    nextNumber,
    numbers,
    handleNumberClick,
    resetGame,
  };
};

export default useGame;
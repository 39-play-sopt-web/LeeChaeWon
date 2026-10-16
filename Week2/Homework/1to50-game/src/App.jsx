import { useEffect, useState } from 'react';
import Header from './shared/components/header';
import GamePage from './features/game/game-page';
import useGameTimer from './features/game/hooks/use-game-timer';
import RankingPage from './features/ranking/ranking-page';

const App = () => {
  const [currentPage, setCurrentPage] = useState('game');
  const [level, setLevel] = useState(1);
  const { elapsedTime, startTimer, stopTimer, resetTimer } = useGameTimer();
  useEffect(() => {
    resetTimer();
  }, [currentPage, level, resetTimer]);

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        level={level}
        setLevel={setLevel}
        elapsedTime={elapsedTime}
      />

      {currentPage === 'game' ? (
        <GamePage
          key={level}
          level={level}
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
        />
      ) : (
        <RankingPage />
      )}
    </>
  );
};

export default App;
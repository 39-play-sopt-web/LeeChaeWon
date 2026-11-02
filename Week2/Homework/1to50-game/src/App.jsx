import { useEffect, useState } from 'react';
import Header from './shared/components/header';
import GamePage from './features/game/game-page';
import useGameTimer from './features/game/hooks/use-game-timer';
import RankingPage from './features/ranking/ranking-page';
import { PAGES } from './shared/constants/page';
import { saveGameRecord } from './shared/utils/game-record-storage';

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.GAME);
  const [level, setLevel] = useState(1);
  const { elapsedTime, startTimer, stopTimer, resetTimer } = useGameTimer();

  useEffect(() => {
    resetTimer();
  }, [currentPage, level, resetTimer]);

  const handleSaveRecord = (playTime) => {
    saveGameRecord({
      playedAt: new Date().toISOString(),
      level,
      playTime,
    });
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        level={level}
        setLevel={setLevel}
        elapsedTime={elapsedTime}
      />

      <div className="min-h-0 flex-1 py-10">
        {currentPage === PAGES.GAME ? (
          <GamePage
            key={level}
            level={level}
            startTimer={startTimer}
            stopTimer={stopTimer}
            resetTimer={resetTimer}
            saveRecord={handleSaveRecord}
          />
        ) : (
          <RankingPage />
        )}
      </div>
    </div>
  );
};

export default App;
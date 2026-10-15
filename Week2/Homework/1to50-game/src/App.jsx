import { useState } from 'react';
import Header from '@/shared/components/header';
import GamePage from './features/game/game-page';

const App = () => {
  const [currentPage, setCurrentPage] = useState('game');
  const [level, setLevel] = useState(1);

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        level={level}
        setLevel={setLevel}
      />

      {currentPage === 'game' && <GamePage key={level} level={level} />}
    </>
  );
};

export default App;
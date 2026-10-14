import { useState } from 'react';
import Header from '@/shared/components/header';

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
    </>
  );
};

export default App;
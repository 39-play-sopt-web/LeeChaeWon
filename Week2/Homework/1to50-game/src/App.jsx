import { useState } from 'react';
import Header from '@/shared/components/header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('game');

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default App;
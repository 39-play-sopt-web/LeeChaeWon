import { useState } from 'react';
import RankingTable from './components/ranking-table';
import { clearGameRecords } from '@/shared/utils/game-record-storage';
import ResetConfirmModal from './components/reset-confirm-modal';
import Button from '@/shared/components/button';

const RankingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResetConfirm = () => {
    clearGameRecords();
    setIsModalOpen(false);
  }
  return (
    <>
      <main className="min-h-full px-6 py-8">
        <section className="mx-auto flex flex-col w-full max-w-3xl gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-heading-01">🏆 랭킹</h2>

            <Button
              variant='danger'
              onClick={() => setIsModalOpen(true)}
            >
              초기화
            </Button>
          </div>

          <RankingTable />

        </section>
      </main>

      <ResetConfirmModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleResetConfirm}
      />
    </>
  );
};

export default RankingPage;
import { useState } from 'react';
import RankingTable from './components/ranking-table';
import { clearGameRecords } from '@/shared/utils/game-record-storage';
import ResetConfirmModal from './components/reset-confirm-modal';

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

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-md border border-primary px-3 py-1.5 text-text-primary text-caption-01 transition-colors hover:bg-primary"
            >
              초기화
            </button>
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
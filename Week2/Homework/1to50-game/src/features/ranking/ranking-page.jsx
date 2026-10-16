import RankingTable from './components/ranking-table';

const RankingPage = () => {
  return (
    <main className="min-h-full px-6 py-8">
      <section className="flex flex-col w-full gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-heading-01">🏆 랭킹</h2>

          <button
            type="button"
            className="rounded-md border border-primary px-3 py-1.5 text-text-primary text-caption-01 transition-colors hover:bg-primary"
          >
            초기화
          </button>
        </div>

        <RankingTable />
      </section>
    </main>
  );
};

export default RankingPage;
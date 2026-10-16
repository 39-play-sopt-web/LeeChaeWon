import { getRankedRecords } from "@/shared/utils/game-record-storage";

const RankingTable = () => {
  const records = getRankedRecords();

  if (records.length === 0) {
    return (
      <p className="py-10 text-center text-body-01 text-text-secondary">
        아직 기록이 없어요. 게임을 플레이해보세요!
      </p>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full border-collapse">
        <thead className="bg-primary">
          <tr>
            <th scope="col" className="px-3 py-2 text-body-01">
              순위
            </th>
            <th scope="col" className="px-3 py-2 text-body-01">
              레벨
            </th>
            <th scope="col" className="px-3 py-2 text-body-01">
              플레이 시간
            </th>
            <th scope="col" className="px-3 py-2 text-body-01">
              기록 시각
            </th>
          </tr>
        </thead>

        <tbody className="bg-surface text-center">
          {records.map((record, index) => (
            <tr key={record.id} className="border-b border-border">
              <td className="px-3 py-2">{index + 1}</td>
              <td className="px-3 py-2">Level {record.level}</td>
              <td className="px-3 py-2">
                {(record.playTime / 1000).toFixed(2)}초
              </td>
              <td className="px-3 py-2">{record.playedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
import { getGameRecords } from "@/shared/utils/game-record-storage";

// 랭킹에 보여줄 게임 기록
export const getRankedRecords = () => {
  const { records, error } = getGameRecords();

  return {
    records: records.sort(
      (a, b) =>
        b.level - a.level ||
        a.playTime - b.playTime ||
        a.id - b.id,
    ),
    error,
  };
};
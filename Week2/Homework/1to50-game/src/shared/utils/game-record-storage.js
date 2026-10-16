const STORAGE_KEY = 'gameRecords';

// 저장된 게임 기록 조회
export const getGameRecords = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
};

// 새로운 게임 기록 저장
export const saveGameRecord = (record) => {
  const savedRecords = getGameRecords();

  const newRecord = {
    id: Date.now(),
    ...record,
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...savedRecords, newRecord]),
  );
};

// 랭킹에 보여줄 게임 기록
export const getRankedRecords = () => {
  return getGameRecords().sort(
    (a, b) =>
      b.level - a.level ||
      a.playTime - b.playTime ||
      a.id - b.id,
  );
};

// 랭킹 삭제
export const clearGameRecords = () => {
  localStorage.removeItem(STORAGE_KEY);
};

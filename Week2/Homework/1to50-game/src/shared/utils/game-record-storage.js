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

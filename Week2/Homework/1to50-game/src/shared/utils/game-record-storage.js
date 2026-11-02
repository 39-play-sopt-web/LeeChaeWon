const STORAGE_KEY = 'gameRecords';

// 저장된 게임 기록 조회
export const getGameRecords = () => {
  try {
    const records = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]',
    );

    if (!Array.isArray(records)) {
      throw new Error('잘못된 게임 기록 형식입니다.');
    }

    return {
      records,
      error: null,
    };
  } catch (error) {
    console.error('게임 기록을 불러오지 못했습니다.', error);

    return {
      records: [],
      error: '게임 기록을 불러오지 못했어요.',
    };
  }
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

// 랭킹 삭제
export const clearGameRecords = () => {
  localStorage.removeItem(STORAGE_KEY);
};

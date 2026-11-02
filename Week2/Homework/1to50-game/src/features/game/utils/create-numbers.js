const createNumbers = (start, end) => {
  // start부터 end까지의 숫자를 담은 배열 생성
  const numbers = Array.from(
    { length: end - start +1 },
    (_, index) => start + index,
  );

  // 배열 섞기
  for(let i = numbers.length -1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i+1));

    [numbers[i], numbers[randomIndex]] = [
      numbers[randomIndex],
      numbers[i],
    ];
  }

  return numbers;
};

export default createNumbers;
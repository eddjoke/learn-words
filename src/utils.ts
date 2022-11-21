export const getRandomIndex = (length: number) =>
  Math.floor(Math.random() * length);

export const shuffleArray = (array: string[]) =>
  array.sort(() => Math.random() - 0.5);

export const pickData = (words: Record<string, string>) => {
  const wordsArray = Object.entries(words);

  const randomIndex = getRandomIndex(wordsArray.length);
  const pickedWord = wordsArray[randomIndex];

  const [word, answer] = pickedWord;

  const leftovers = [
    ...wordsArray
      .filter((value, index) => index !== randomIndex)
      .map(([, answer]) => answer),
  ];

  const pickAnswers = (values: string[], count: number): string[] => {
    let indexes: number[] = [];
    while (indexes.length < count) {
      const pickedIndex = getRandomIndex(values.length);
      if (!indexes.includes(pickedIndex)) indexes.push(pickedIndex);
    }

    return indexes.map((value) => values[value]);
  };

  return {
    word,
    answer,
    answers: shuffleArray([answer, ...pickAnswers(leftovers, 3)]),
  };
};

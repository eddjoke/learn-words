import { useCallback, useEffect, useState } from "react";
import { pickData } from "../utils";
import WordCard from "./WordCard";

type Props = {
  languages: string[];
  words: Record<string, string>;
};

function WordPanel({ languages, words }: Props) {
  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [inverted, setInverted] = useState(true);

  const getWords = useCallback(() => {
    const reversedWords = Object.fromEntries(
      Object.entries(words).map(([key, value]) => [value, key])
    );

    return pickData(inverted ? reversedWords : words);
  }, [inverted, words]);

  const [{ word, answers, answer }, setData] = useState(getWords());

  const switchLanguages = () => {
    setInverted(!inverted);
  };

  const reset = useCallback(() => {
    setData(getWords());
    setButtonsDisabled(false);
    setClickedCardIndex(-1);
  }, [getWords]);

  const onWordClick = (word: string) => {
    const isCorrect = answer === answers[answers.indexOf(word)];
    setClickedCardIndex(answers.indexOf(word));
    setButtonsDisabled(true);

    setTimeout(reset, isCorrect ? 1000 : 3000);
  };

  useEffect(() => {
    reset();
  }, [inverted, reset]);

  const getStatus = (cardIndex: number) => {
    const isCorrect = answer === answers[cardIndex];

    if (clickedCardIndex !== -1) {
      if (clickedCardIndex === cardIndex) {
        if (isCorrect) {
          return "success";
        }
        return "error";
      }

      if (isCorrect) {
        return "hint";
      }
    }

    return "neutral";
  };

  return (
    <div className="h-full">
      <div className="grid grid-rows-2 md:gap-20 h-full">
        <div>
          <div className="flex justify-between">
            <button onClick={switchLanguages}>
              {inverted ? languages[0] : languages[1]}
            </button>
            <button onClick={reset}>Praleisti</button>
          </div>
          <div className="flex items-center justify-center h-full">
            <h1 className="text text-4xl sm:text-5xl uppercase">{word}</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {answers.map((value, index) => (
            <WordCard
              key={index}
              onClick={onWordClick}
              disabled={buttonsDisabled}
              status={getStatus(index)}
            >
              {value}
            </WordCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WordPanel;

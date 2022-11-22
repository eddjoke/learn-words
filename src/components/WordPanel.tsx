import { useState } from "react";
import { pickData } from "../utils";
import WordCard from "./WordCard";

type Props = {
  words: Record<string, string>;
};

function WordPanel({ words }: Props) {
  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [inverted, setInverted] = useState(true);

  const getWords = () => {
    const reversedWords = Object.fromEntries(
      Object.entries(words).map(([key, value]) => [value, key])
    );

    return pickData(inverted ? reversedWords : words);
  };

  const [{ word, answers, answer }, setData] = useState(getWords());

  const switchLanguages = () => {
    setInverted(!inverted);
    reset();
  };

  const reset = () => {
    setData(getWords());
    setButtonsDisabled(false);
    setClickedCardIndex(-1);
  };

  const onWordClick = (word: string) => {
    setClickedCardIndex(answers.indexOf(word));
    setButtonsDisabled(true);

    setTimeout(reset, 1200);
  };

  const getStatus = (cardIndex: number) => {
    if (clickedCardIndex === cardIndex) {
      if (answer === answers[cardIndex]) {
        return "success";
      }
      return "error";
    }

    return "neutral";
  };

  return (
    <div className="h-full">
      <div className="flex justify-between">
        <button onClick={switchLanguages}>{inverted ? "LT" : "EN"}</button>
        <button onClick={reset}>Praleisti</button>
      </div>
      <div className="grid grid-rows-2 gap-20 h-full">
        <div className="flex items-center justify-center">
          <h1 className="text text-5xl uppercase">{word}</h1>
        </div>
        <div className="grid grid-cols-2 gap-10">
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

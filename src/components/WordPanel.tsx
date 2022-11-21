import { useState } from "react";
import WordCard from "./WordCard";

type Props = {
  data: {
    word: string;
    answers: string[];
    answer: string;
  };
  onReset: () => void;
};

function WordPanel({ data: { word, answers, answer }, onReset }: Props) {
  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const reset = () => {
    onReset();
    setButtonsDisabled(false);
    setClickedCardIndex(-1);
  };

  const onWordClick = (word: string) => {
    setClickedCardIndex(answers.indexOf(word));
    setButtonsDisabled(true);

    setTimeout(reset, 1500);
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
  );
}

export default WordPanel;

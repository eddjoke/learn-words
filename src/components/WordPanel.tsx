import React, { useCallback, useEffect, useState } from "react";
import { pickData } from "../utils";
import WordCard from "./WordCard";

type Props = {
  languages: string[];
  words: Record<string, string>;
};

function WordPanel({ languages, words }: Props) {
  const TOTAL_GUESS_COUNT = 20;
  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [guessesCount, setGuessesCount] = useState(1);
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

  const getNextWord = useCallback(() => {
    setData(getWords());
    setButtonsDisabled(false);
    setClickedCardIndex(-1);
  }, [getWords]);

  const reset = useCallback(() => {
    getNextWord();
    setShowResults(false);
    setCorrectAnswersCount(0);
    setGuessesCount(1);
  }, [getNextWord]);

  const registerGuess = () => {
    setGuessesCount(guessesCount + 1);
    getNextWord();
  };

  const onWordClick = (word: string) => {
    const isCorrect = answer === answers[answers.indexOf(word)];
    setClickedCardIndex(answers.indexOf(word));
    setButtonsDisabled(true);

    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    const isFinished = guessesCount >= TOTAL_GUESS_COUNT;
    setTimeout(() => {
      if (isFinished) {
        setShowResults(true);
      } else {
        registerGuess();
      }
    }, 1200);
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

  const guessCounter = `${guessesCount}/${TOTAL_GUESS_COUNT}`;
  const result = `${correctAnswersCount}/${guessesCount}`;
  const resultPercentage = Math.floor(
    (correctAnswersCount / guessesCount) * 100
  );

  return (
    <div className="h-full">
      {showResults ? (
        <div className="h-full">
          <div className="flex flex-col h-full inset-full items-center justify-center gap-14">
            <div className="text-center">
              <p className="text-2xl mb-4">Rezultatas: {result}</p>
              <h1 className="text-7xl">{resultPercentage}%</h1>
            </div>
            <WordCard onClick={reset}>Iš naujo</WordCard>
          </div>
        </div>
      ) : (
        <div className="grid grid-rows-2 md:gap-20 h-full">
          <div className="relative">
            <div className="absolute flex justify-between w-full">
              <button onClick={switchLanguages}>
                {inverted ? languages[0] : languages[1]}
              </button>
              <div>{guessCounter}</div>
              <button onClick={registerGuess}>Praleisti</button>
            </div>
            <div className="flex items-center justify-center h-full md:mt-11">
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
      )}
    </div>
  );
}

export default WordPanel;

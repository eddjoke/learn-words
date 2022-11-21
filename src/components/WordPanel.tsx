import { pickData } from "../utils";
import WordCard from "./WordCard";

type Props = {
  words: Record<string, string>;
};

function WordPanel({ words }: Props) {
  const data = pickData(words);

  return (
    <div className="grid grid-rows-2 gap-20 h-full">
      <div className="flex items-center justify-center">
        <h1 className="text text-5xl uppercase">{data.word}</h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {data.answers.map((value, index) => (
          <WordCard key={index}>{value}</WordCard>
        ))}
      </div>
    </div>
  );
}

export default WordPanel;

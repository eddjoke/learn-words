import { useState } from "react";
import WordPanel from "./components/WordPanel";
import { pickData } from "./utils";

type Props = {
  words: Record<string, string>;
};

function App({ words }: Props) {
  const [inverted, setInverted] = useState(false);

  const getWords = () => {
    const reversedWords = Object.fromEntries(
      Object.entries(words).map(([key, value]) => [value, key])
    );

    return pickData(inverted ? reversedWords : words);
  };

  const [data, setData] = useState(getWords());

  const reset = () => {
    setData(getWords());
  };

  return (
    <div className="absolute h-full w-full">
      <div className="text-gray-100 p-20 h-full">
        <WordPanel data={data} onReset={reset} />
      </div>
    </div>
  );
}

export default App;

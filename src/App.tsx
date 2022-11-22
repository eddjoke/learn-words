import WordPanel from "./components/WordPanel";

type Props = {
  words: Record<string, string>;
};

function App({ words }: Props) {
  return (
    <div className="absolute h-full w-full">
      <div className="text-gray-100 p-20 h-full">
        <WordPanel words={words} />
      </div>
    </div>
  );
}

export default App;

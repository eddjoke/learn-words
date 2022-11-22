import WordPanel from "./components/WordPanel";
import { languages, words } from "./constants";

function App() {
  return (
    <div className="absolute h-full w-full">
      <div className="text-gray-100 p-6 sm:p-10 md:p-20 h-full">
        <WordPanel languages={languages} words={words} />
      </div>
    </div>
  );
}

export default App;

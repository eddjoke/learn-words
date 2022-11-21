import WordCard from "./components/WordCard";

function App() {
  return (
    <div className="absolute h-full w-full">
      <div className="text-gray-100 p-20 h-full">
        <div className="grid grid-rows-2 gap-20 h-full">
          <div className="flex items-center justify-center">
            <h1 className="text text-5xl">Hello world!</h1>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <WordCard />
            <WordCard status="error" />
            <WordCard status="success" />
            <WordCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

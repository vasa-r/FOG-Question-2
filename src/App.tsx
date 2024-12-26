import RainfallGrid from "./components/RainFallGrid";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a]">
      <RainfallGrid rows={15} cols={20} />
    </div>
  );
};

export default App;

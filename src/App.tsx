import RainGrid from "./components/RainGrid";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a]">
      <RainGrid rows={15} cols={20} />
    </div>
  );
};

export default App;

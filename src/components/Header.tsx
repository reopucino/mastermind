import { useGame } from "../contexts/GameContext";

const Header: React.VFC = () => {
  const { dispatch } = useGame();

  return (
    <header className="flex justify-between items-center text-center border-b-2 border-gray-300 py-2 mb-4">
      <h1 className="text-xl font-bold">Mastermind</h1>
      <button
        className="rounded-full py-1 px-2 text-xs font-bold hover:bg-gray-800 hover:text-white"
        onClick={() => dispatch({ type: "NEW_GAME" })}
      >
        New Game
      </button>
    </header>
  );
};

export default Header;

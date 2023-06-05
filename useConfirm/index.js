import { createRoot } from "react-dom/client";
import { useConfirm } from "./useConfirm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const deleteWorld = () => console.log("Deleteing the world..");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

root.render(<App />);

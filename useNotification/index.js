import { createRoot } from "react-dom/client";
import { useNotification } from "./useNotification";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const triggerNotif = useNotification("useNotification text...", {
    body: "Optional body is ...",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
};

root.render(<App />);

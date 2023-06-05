import { createRoot } from "react-dom/client";
import { useTitle } from "./useTitle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
};

root.render(
  <App />
);

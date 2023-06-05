import { createRoot } from "react-dom/client";
import { useBeforeLeave } from "./useBeforeLeave";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

root.render(<App />);

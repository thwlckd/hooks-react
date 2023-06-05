import { createRoot } from "react-dom/client";
import { useFadeIn } from "./useFadeIn";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>useFadeIn test...</p>
    </div>
  );
};

root.render(<App />);

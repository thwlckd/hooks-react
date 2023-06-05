import { createRoot } from "react-dom/client";
import { useInput } from "./useInput";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

root.render(
  <App />
);

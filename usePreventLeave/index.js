import { createRoot } from "react-dom/client";
import { usePreventLeave } from "./usePreventLeave";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

root.render(<App />);

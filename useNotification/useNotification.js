import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

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

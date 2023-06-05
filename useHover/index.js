import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useHover = (useHover) => {
  if (typeof useHover !== "function") {
    return;
  }
  const element = useRef(); // DOM에 ref 지정을 통한 접근. like getElementById()
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", useHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", useHover);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

root.render(<App />);

import { createRoot } from "react-dom/client";
import { useFullscreen } from "./useFullscreen";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img
          ref={element}
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          width="250"
        />
        <button onClick={exitFull}>exit full screen</button>
      </div>
      <button onClick={triggerFull}>make full screen</button>
    </div>
  );
};

root.render(<App />);

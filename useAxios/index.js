import { createRoot } from "react-dom/client";
import useAxios from "./useAxios";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(`${loading} \n${error} \n${JSON.stringify(data)}`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      {/* ${true && "loading"} -> loading*/}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

root.render(<App />);

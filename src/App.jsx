import MyPortfolio from "./components/MyPortfolio";
import "./index.css";
import { MainContextProvider } from "./context/MainContext";

function App() {
  return (
    <MainContextProvider>
      <MyPortfolio />
    </MainContextProvider>
  );
}

export default App;

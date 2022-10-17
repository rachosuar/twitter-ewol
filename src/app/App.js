import "./global-styles.css";
import AppContextProvider from "./context/AppContext/AppContextProvider";

import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import AppContext from ".";
import { getUser } from "../../../api/users";

const AppContextProvider = ({ children }) => {
  const initialAppstate =
    JSON.parse(window.localStorage.getItem("app_context")) ?? {};
  let [appState, setAppState] = useState(initialAppstate);

  useEffect(() => {
    window.localStorage.setItem("app_context", JSON.stringify(appState));
  }, [appState]);

  return (
    <AppContext.Provider value={{ data: appState, setData: setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

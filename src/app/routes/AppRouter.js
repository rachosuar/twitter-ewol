import { useContext } from "react";
import AppContext from "../context/AppContext";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";

const AppRouter = () => {
  let { data } = useContext(AppContext);

  return <>{data.id ? <HomePage /> : <RegisterPage />}</>;
};

export default AppRouter;

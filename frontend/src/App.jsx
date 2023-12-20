import { Outlet } from "react-router-dom";
import "./App.css";
import Descriptiondeloffre from "./pages/DescriptionOffre/Descriptiondeloffre";

function App() {
  return (
    <div className="App">
      <Outlet />
      <Descriptiondeloffre />;
    </div>
  );
}

export default App;

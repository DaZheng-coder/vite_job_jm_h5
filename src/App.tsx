import "./App.css";
import "./utils/rem.js";
import "./tailwind.css";
import "./antdTheme.css";
import { Route, Router, Routes } from "react-router-dom";
import ShareEmployInfo from "./modules/ShareEmployInfo/index.js";

function App() {
  return (
    <Routes>
      <Route path="/shareEmployInfo/index" Component={ShareEmployInfo}></Route>
    </Routes>
  );
}

export default App;

import "./App.css";
import "./utils/rem.js";
import "./tailwind.css";
import "./antdTheme.less";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.js";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  );
}

export default App;

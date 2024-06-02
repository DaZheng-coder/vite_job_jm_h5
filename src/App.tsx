import "./App.css";
import "./utils/rem.js";
import "./tailwind.css";
import "./antdTheme.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes.js";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          Component={route.component}
        ></Route>
      ))}
    </Routes>
  );
}

export default App;

import "../src/main.scss";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      <Routes>
        {router &&
          router.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
      </Routes>
    </div>
  );
}

export default App;

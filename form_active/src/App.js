import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

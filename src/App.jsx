import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Upadte from "./components/Upadte";

import "bootstrap/dist/css/bootstrap.min.css";
//bootstrap@5.3.3/dist/css/bootstrap.min.css
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/update/:id" element={<Upadte />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

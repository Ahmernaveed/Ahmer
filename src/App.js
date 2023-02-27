import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:id" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

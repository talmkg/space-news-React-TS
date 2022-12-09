import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Gallery from "./components/Gallery";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      {/* BrowserRouter adds router logic */}
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/article/:articleId" element={<Article />} />

          {/* path for the main route = ofc "/" */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

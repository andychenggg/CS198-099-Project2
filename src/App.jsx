
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Containers/Home.jsx"
import AboutUs from "./Containers/AboutUs.jsx"
import FavouriteVideos from "./Containers/FavouriteVideos.jsx"
import Members from "./Containers/Members.jsx"

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/favourite-videos" element={<FavouriteVideos />} />
              <Route path="/members" element={<Members />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App

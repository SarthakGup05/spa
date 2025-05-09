import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App

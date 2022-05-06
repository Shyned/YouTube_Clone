// General Imports
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./components/VideoPages/VideoPage";
import Searchpage from "./pages/searchpage/searchpage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "../src/hooks/useAuth";

function App() {
  const [user, token] = useAuth();
  return (
    <section>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videopage" element={<VideoPage />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import axios from "axios";
const HomePage = () => {
  const [user, token] = useAuth();
  

  return (
    <div className="container">
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="800"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default HomePage;

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import axios from "axios";
const HomePage = () => {


  const [user, token] = useAuth();
  
  

  // const fetchVideo = async () => {
  //   try {
  //     let response = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search?q={search}&key={AIzaSyBlRavAu8R7mgPnfUyp8vN26FDguqYosuU}",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     setSearch(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };




  return (
  
    <div className="container">
      
      <iframe id="ytplayer" type="text/html" width="640" height="800"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
    </div>
  );
};

export default HomePage;






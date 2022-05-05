import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const fetchVideo = async () => {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q={search}&key={AIzaSyBlRavAu8R7mgPnfUyp8vN26FDguqYosuU}",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setSearch(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // useEffect(() => {
  // });
  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  return (
    <div className="container">
      <iframe
        id="ytplayer"
        title="player"
        type="text/html"
        width="800"
        height="600"
        // make video / videos it's own jsx component
        src={search}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default HomePage;

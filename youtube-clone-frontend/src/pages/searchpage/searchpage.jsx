import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import "./searchpage.css";

// part=snippet&q=

const SearchPage = () => {
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentVideo, setCurrentVideo] = useState([]);

  useEffect(() => {
    getSearchResults();
  }, [search]);
  // get data from clicked card
  function getVideo(vid) {
    let tempvideo = vid;
    console.log(tempvideo);
    setCurrentVideo(tempvideo);
  }

  function findItem(keyword) {
    let tempkey = keyword;
    setSearch(tempkey);
  }

  async function getSearchResults() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyDVGusdch7Zf0faFb7cYBfEibEc1aM3PIs`
    );
    console.log(response.data.items);
    setSearchResults(response.data.items);
  }

  return (
    <section>
      <SearchBar className="Searchbar" searchKeyWord={findItem} />
      <div className="video-section"></div>
      {searchResults.map((video, index) => {
        return (
          // on click set current video to click video data to be passed to app.js to  video page
          // need to return video id
          <button onClick={null} className="video-card" key={index}>
            <img
              className="search-thumbnail"
              src={video.snippet.thumbnails.high.url}
              alt="thumbnail"
            />
            <p>{video.snippet.title}</p>
          </button>
        );
      })}
    </section>
  );
};

export default SearchPage;

import React from 'react';
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios';
import "./searchpage.css"

// part=snippet&q=

const SearchPage = () => {
    const [search, setSearch] = useState([]);
    const [searchResults, setSearchResults] = useState([])


    useEffect(()=>{
      getSearchResults()
    }, [search])

  function findItem(keyword){
    let tempkey = keyword
    console.log(tempkey)
    setSearch(tempkey)
  }

    async function getSearchResults(searchTerm = "bob ross"){
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyDVGusdch7Zf0faFb7cYBfEibEc1aM3PIs`)
      console.log(response.data.items)
      setSearchResults(response.data.items)
    }



  return(
    <section>
        <SearchBar className = "Searchbar" searchKeyWord={findItem}/>
        <div className='video-section'></div>
        {searchResults.map((video,index)=>{
          return(
            
            <div className='video-card'>
            <img src = {video.snippet.thumbnails.medium.url} alt='thumbnail'/>
              <p>{video.snippet.title}</p>
            </div>
          )
        })}

    </section>
  )
}


export default SearchPage;
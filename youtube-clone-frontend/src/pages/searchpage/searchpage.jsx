import React from 'react';
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios';


// part=snippet&q=

const SearchPage = () => {
    const [search, setSearch] = useState([]);
    const [searchResults, setSearchResults] = useState([])


    useEffect(()=>{
      getSearchResults()
    }, [])

  function findItem(keyword){
    let tempkey = keyword
    console.log(tempkey)
    setSearch(tempkey)
  }

    async function getSearchResults(searchTerm = "bob ross"){
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDVGusdch7Zf0faFb7cYBfEibEc1aM3PIs`)
      console.log(response.data.items)
      setSearchResults(response.data.items)
    }



  return(
    <section>
        <SearchBar className = "Searchbar" searchKeyWord={findItem}/>
        
    </section>
  )
}


export default SearchPage
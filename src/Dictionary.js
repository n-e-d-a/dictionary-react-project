import axios from "axios";
import {React,useState} from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
let [keyword,setKeyword]=useState(null);
let [results,setReults]=useState(null);

function handleResponse(response){
// console.log(response.data[0].meanings[0].definitions[0].definition);
setReults(response.data[0]);
}   

function search(event){
  event.preventDefault();
  //documentation: https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
}
function handleKeywordChange(event){
    setKeyword(event.target.value);
}

  return (
  <div className="dictionary">
      <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
      </form>
      <Results results={results} />
  </div>
  );
}

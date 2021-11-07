import axios from "axios";
import {React,useState} from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyWord);
let [results,setReults]=useState(null);
let [loaded,setLoaded]=useState(false);

function handleResponse(response){
// console.log(response.data[0].meanings[0].definitions[0].definition);
setReults(response.data[0]);
}   

function Search(){
 //documentation: https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  Search();
 
}
function handleKeywordChange(event){
    setKeyword(event.target.value);
}
function load(){
    setLoaded(true);
    Search();
}

if(loaded){
     return (
  <div className="dictionary">
      <section>
          <h1>What word do you want to look up?</h1>
      <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultvalue={props.defaultKeyWord}/>
      </form>
      <div className="hint">
          Suggested words:sunset, wine;
      </div>
      </section>
      <Results results={results} />
  </div>
  );
}
else{
    load();
    return "Loading...";
}
 
}

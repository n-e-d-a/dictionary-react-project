import React from "react";
 import ReactAudioPlayer from "react-audio-player";
 import "./Phonetics.css";

export default function Phonetics(props){
return (
  <div className="phonetics">
    <ReactAudioPlayer
      src={props.phonetics.audio}
      className="audioPlayer"
      controls
            
    />
    <br />
   <span className="text"> {props.phonetics.text} </span>
  </div>
);
}
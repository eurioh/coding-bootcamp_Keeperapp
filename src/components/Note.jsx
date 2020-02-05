import React from "react";

let title = "";
let contents = "";

if (title == ""){
    title = "Hey there, write Something."
    contents = "And Keep it~!"
};

function Note(props){
    return(
        <div className ="note"> 
            <h1> {props.title} </h1>
            {/* props will contain title property */}
            <p> {props.content} </p>
        </div>
    );
}

export default Note;
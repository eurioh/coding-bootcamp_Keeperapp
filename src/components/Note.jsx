import React, {useState} from "react";

let title = "";
let contents = "";

if (title === ""){
    title = "Hey there, write Something."
    contents = "And Keep it~!"
};

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }


    return(
        <div className="note"> 
            <h1> {props.title} </h1>
            {/* props will contain title property */}
            <p> {props.content} </p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;
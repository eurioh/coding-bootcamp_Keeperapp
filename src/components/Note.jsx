import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete'; 

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return(
        <div className="note"> 
            <h1> {props.title} </h1>
            {/* props will contain title property */}
            <p> {props.content} </p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
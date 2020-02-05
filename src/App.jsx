import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes.js";

function createNote(note){
return (
    // will send Note.jsx component
    <Note 
        key={note.key}
        //important to use it when using .map(), key will organize the items inside when mapping
        title={note.title}
        // note will contain title property
        content={note.content}
        // need curlybarces because of js code
    />
)}; 
//commented out to create arrow (=>) function
//can be defined inside the createNotes function of {notes.map(createNotes)} 

function App(){
    return(
        <div>
            <Header />
                {notes.map(createNote)}
                    
                {/* pull directly from notes.js file -> notes.map */}
            <Footer />
        </div>
    );
}

export default App;
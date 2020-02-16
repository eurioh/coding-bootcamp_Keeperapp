import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";


function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
//newNote will pass over props.onAdd(note); in submitNote(event) function of CreateArea.jsx
        setNotes(prevNotes=>{
            return [...prevNotes, newNote];
            //this will be set as a new note array in [notes, setNotes] 
        });
    }

    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem, index)=>{
                return index!==id;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>

                {notes.map((noteItem, index) => {
                    return(
                    <Note 
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                    );
                })}
            <Footer />
        </div>
    );
}



export default App;
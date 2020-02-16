//1. Create a new React app. -
//2. Create a App.jsx component. -
//3. Create a Header.jsx component that renders a <header> element -
//to show the Keeper App name in an <h1>.-
//4. Create a Footer.jsx component that renders a <footer> element-
//to show a copyright message in a <p> with a dynamically updated year.-
//5. Create a Note.jsx component to show a <div> element with a-
//<h1> for a title and a <p> for the content.-
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));

// CHALLENGE:
// 1. Implement the add note function
// -Pass the new note back to the App
// -Add new note to an array
// -Take array and render searpate Note component for each item

// 2. Implement the delete note function
// - call back from the Note component to trigger a delete function
// - use the filter function to filter out the itme needs deletion
// - pass a id over to the note component, pass it back to the app when deleting
 
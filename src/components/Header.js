import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

const Header = () => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <h4>Click on an image to earn points, but don't click on any image more than once!
    </h4>
  </header>
);

export default Header;

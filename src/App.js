/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";

import Navbar from "./components/navbar";
import Textfrom from "./components/textform";

import React, { useState } from "react";
// import Translator from "./components/translator";
import About from "./components/about";
import Alert from "./components/alert";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  //alert
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
  // eslint-disable-next-line no-unused-vars
  //to switch changing mode throug enable button

  // const togglemode = () => {
  //   if (mode === "light") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "rgb(21 30 67)";
  //     showalert("dark mode has been enable", "success");
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "white";
  //     showalert("light mode has been enable", "success");
  //   }
  // };
  const removebodyclasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  // eslint-disable-next-line no-unused-vars
  const togglemode = (cls) => {
    removebodyclasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(21 30 67)";
      showalert("dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enable", "success");
    }
  };
  return (
    <>
      {/* <Navbar title='Navbar'  /> 
       <Navbar /> */}
      <Router>
        <Navbar title='TextFile' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Switch>
            <Route path='/about'>
              <About mode={mode} />
            </Route>
            <Route path='/Home'>
              <Textfrom showalert={showalert} heading='Textbox' mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <Translator /> */}
    </>
  );
}
export default App;

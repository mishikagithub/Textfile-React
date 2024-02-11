import React, { useState } from "react";

export default function textform(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    // setText("convert in uppercase");
    props.showalert("convert in uppercase", "success");
  };
  //clear text
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("convert in cleartext", "success");
  };
  const handleOnChange = (event) => {
    // console.log("convert in uppercase");
    setText(event.target.value);
  };
  const handlecopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("convert in copytext", "success");
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, setText] = useState("");

  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === "dark" ? "white" : "#0e4e5b" }}
      >
        <h1> {props.heading} </h1>{" "}
        <div className='mb-3'>
          <label htmlFor='mybox' className='form-label'>
            {" "}
          </label>{" "}
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{
              Backgroundcolor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "black" : "#0e4e5b"
            }}
            id='mybox'
            rows='3'
          >
            {" "}
          </textarea>{" "}
        </div>{" "}
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>
          convert into uppercase{" "}
        </button>{" "}
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>
          clear text{" "}
        </button>{" "}
        <button className='btn btn-primary mx-1' onClick={handlecopy}>
          copy text{" "}
        </button>{" "}
      </div>{" "}
      <div
        className='container my-3'
        style={{ color: props.mode === "dark" ? "white" : "#0e4e5b" }}
      >
        <h1> Text summary </h1>{" "}
        <p>
          {" "}
          {text.split("").length}
          words {text.length}
          characters{" "}
        </p>{" "}
        <p>
          {" "}
          {0.008 * text.split("").length}
          Minute read{" "}
        </p>{" "}
        <p> {text} </p>{" "}
      </div>{" "}
    </>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  const handleFontSize = (size) => {
    setFontSize(size);
    props.showAlert("Font size changed!", "success");
  };

  const handleFontStyle = (style) => {
    setFontStyle(style);
    props.showAlert("Font style changed!", "success");
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces deleted!", "success");
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("16px");
  const [fontStyle, setFontStyle] = useState("normal");

  return (
    <div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="container d-flex">
          <div className="container flex-grow-1 mr-2">
            <p
              className="text-body-primary h5 me-2 mt-3"
              style={{ display: "inline-block" }}
            >
              Font Size
            </p>
            <select
              disabled={text.length === 0}
              className="btn btn-primary dropdown-toggle"
              onChange={(e) => handleFontSize(e.target.value)}
            >
              <option value={"8px"} className="dropdown-item">
                8px
              </option>
              <option value={"12px"} className="dropdown-item">
                12px
              </option>
              <option value={"20px"} className="dropdown-item">
                20px
              </option>
              <option value={"34px"} className="dropdown-item">
                34px
              </option>
              <option value={"48px"} className="dropdown-item">
                48px
              </option>
              <option value={"60px"} className="dropdown-item">
                60px
              </option>
            </select>
          </div>
          <div
            className="container flex-grow-1 mr-2"
            style={{ display: "inline-block" }}
          >
            <p
              className="text-body-primary h5 me-2 mt-3"
              style={{ display: "inline-block" }}
            >
              Font Style
            </p>
            <select
              disabled={text.length === 0}
              className="btn btn-primary dropdown-toggle"
              onChange={(e) => handleFontStyle(e.target.value)}
            >
              <option value={"normal"} className="dropdown-item">
                Normal
              </option>
              <option value={"bold"} className="dropdown-item">
                Bold
              </option>
              <option value={"italic"} className="dropdown-item">
                Italic
              </option>
              <option value={"oblique"} className="dropdown-item">
                Oblique
              </option>
            </select>
          </div>
        </div>

        <div className="mb-3 my-3">
          <textarea
            style={{
              fontSize: fontSize,
              resize: "none",
              fontStyle: fontStyle,
              fontWeight:
                fontStyle === "bold"
                  ? "bold"
                  : fontStyle === "oblique"
                  ? "oblique"
                  : "normal",
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          disabled={text.length === 0}
          onClick={handleUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          disabled={text.length === 0}
          onClick={handleLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Delete Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-1"
          disabled={text.length === 0}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          disabled={text.length === 0}
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          Number of words : {text.trim().split(/\s+/).filter(Boolean).length}
          <br />
          Number of characters : {text.length} <br />
          Minutes Read : {0.08 * text.split(" ").length}
        </p>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above text box to preview it here."}
        </p>
      </div>
    </div>
  );
}

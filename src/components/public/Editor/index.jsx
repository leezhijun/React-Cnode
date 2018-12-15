import React, { PureComponent } from "react";
import SimpleMDE from "simplemde";
import ReactDOM from "react-dom";
import "simplemde/dist/simplemde.min.css";
class Edtior extends PureComponent {
  componentDidMount() {
    this.props.onRef(this);
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      placeholder: "Type here..."
    });

    this.simplemde.codemirror.on("change", () => {
      // console.log(this.simplemde.value());
      let content = this.simplemde.value();
      this.props.getContent(content);
    });
  }

  clearEditor = () => {
    this.simplemde.value("");
  };

  deleteEditor = () => {
    // delete this.simplemde
    ReactDOM.unmountComponentAtNode(document.getElementById("myEditor"));
  };

  render() {
    return (
      <div id="myEditor">
        <textarea id="editor" />
      </div>
    );
  }
}

export default Edtior;

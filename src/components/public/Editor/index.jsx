import React, { PureComponent, Fragment } from "react";
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";
class Edtior extends PureComponent {

  componentDidMount() {
    this.props.onRef(this)
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      placeholder: "Type here..."
    });

    this.simplemde.codemirror.on("change", ()=>{
      // console.log(this.simplemde.value());
      let content = this.simplemde.value();
      this.props.getContent(content);
    });
  }

  clearEditor = () => {
    this.simplemde.value('')
  }

  render() {
    return (
      <Fragment>
        <textarea id="editor" />
      </Fragment>
    );
  }
}

export default Edtior;

import React, { PureComponent, Fragment } from "react";
import { Button, Flex } from "antd-mobile";
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";
class Edtior extends PureComponent {
  componentDidMount() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      styleSelectedText: false,
      placeholder: "Type here..."
    });
  }

  handleClick = () => {
    let content = this.simplemde.value();
    this.props.getContent(content);
  };


  render() {
    return (
      <Fragment>
        <textarea id="editor" />
        <Flex justify="end">
          <Button
            style={{ marginRight: "10px" }}
            type="ghost"
            inline
            size="small"
            onClick={this.handleClick}
          >
            发布
          </Button>
        </Flex>
      </Fragment>
    );
  }
}

export default Edtior;

import React, { PureComponent, Fragment } from "react";
import { Button, Flex } from "antd-mobile";
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";

class Edtior extends PureComponent {
  componentDidMount() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor")
    });
  }

  render() {
    return (
      <Fragment>
        <textarea id="editor" />
        <Flex justify="end">
          <Button type="ghost" inline size="small">发布</Button>
        </Flex>
      </Fragment>
    );
  }
}

export default Edtior;

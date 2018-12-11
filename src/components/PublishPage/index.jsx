import React, { PureComponent, Fragment } from "react";
import { Picker, List, WhiteSpace, InputItem, WingBlank, Toast } from "antd-mobile";
import Editor from "../public/Editor";
import style from "./index.scss";
const district = [
  {
    label: <div>问答</div>,
    value: "ask"
  },
  {
    label: <div>分享</div>,
    value: "share"
  },
  {
    label: <div>工作</div>,
    value: "job"
  },
  {
    label: <div>客户端测试</div>,
    value: "dev"
  }
];

class PublishPage extends PureComponent {
  state = {
    tabValue: null,
    title: null,
    content: null
  };

  setContent = content => {
    this.setState((state, props) => ({
      content
    }), () => {
      const { tabValue, title, content } = this.state
      if (!tabValue) {
        Toast.info('分类不能为空', 1);
        return false
      }
      if (!title) {
        Toast.info('标题不能为空', 1);
        return false
      }
      if (!content) {
        Toast.info('内容不能为空', 1);
        return false
      }
    });
  };

  render() {
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          <div className={style["publish"]}>
            <Picker
              data={district}
              cols={1}
              value={this.state.tabValue}
              onChange={v => this.setState({ tabValue: v })}
              onOk={v => this.setState({ tabValue: v })}
              className="forss"
            >
              <List.Item arrow="horizontal">分类</List.Item>
            </Picker>
            <InputItem
              placeholder="请输入话题标题"
              value={this.state.title}
              onChange={title => this.setState({title})}
              ref={el => (this.labelFocusInst = el)}
            >
              <div onClick={() => this.labelFocusInst.focus()}>标题</div>
            </InputItem>
            <WhiteSpace />
            <WingBlank>
              <Editor getContent={this.setContent} />
            </WingBlank>
          </div>
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

export default PublishPage;

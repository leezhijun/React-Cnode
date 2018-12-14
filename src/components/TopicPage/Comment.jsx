import React, { PureComponent, Fragment } from "react";
import { List, WhiteSpace, Flex, Button, Toast } from "antd-mobile";
import { connect } from "react-redux";
import { fechReplies } from '../../actions/topic'
import CommentItem from './CommentItem'
import Editor from "../public/Editor";
import style from "./index.scss";

class Comment extends PureComponent {

  state = {
    content: null
  };

  setContent = content => {
    this.setState({ content });
  };

  handleClick = () => {
    const { id, fechReplies } = this.props;
    const content = this.state.content
    if (!content) {
      Toast.info("内容不能为空", 1);
      return false;
    }
    // console.log({content,id})
    fechReplies({content,id})
    this.child.clearEditor()
  };

  onRef = (ref) => {
      this.child = ref
  }

  renderEidtor = () => {
    return <Fragment>
      <Editor getContent={this.setContent} onRef={this.onRef} />
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
    </Fragment>;
  };

  render() {
    const { replies, timeagoInstance, login, id } = this.props;
    return (
      <Fragment>
        <List
          renderHeader={() => `${replies.length} 条回复`}
          className="my-list"
        >
        <WhiteSpace />
          {replies.map(item => <CommentItem key={item.id} item={item} timeagoInstance={timeagoInstance} topic_id={id} />)}
        </List>
        <WhiteSpace />
        <h4 className={style["comment-add"]}>添加回复</h4>
        <WhiteSpace />
          { login.data.accesstoken ? this.renderEidtor() : <div style={{textAlign:'center'}}>您尚未登录,请登录后操作!</div> }
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(
    mapStateToProps,
    { fechReplies }
  )(Comment)

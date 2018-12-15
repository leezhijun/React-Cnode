import React, { PureComponent, Fragment } from "react";
import { List, Toast, Button, Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fechRepliesUp, fechReplies } from "../../actions/topic";
import Editor from "../public/Editor";

import style from "./index.scss";

const Item = List.Item;

class CommentItem extends PureComponent {

  state = {
    is_reply: false,
    content: null
  }

  setContent = content => {
    this.setState({ content });
  };

  handleUp = () => {
    const { item, login, fechRepliesUp, topic_id } = this.props;
    if (!login.data.accesstoken) {
      Toast.info("登陆后操作!", 1);
      return false;
    }
    const reply_id = item.id;
    fechRepliesUp({ topic_id, reply_id })
  };

  handleReply = () => {
    const { login } = this.props;
    if (!login.data.accesstoken) {
      Toast.info("登陆后操作!", 1);
      return false;
    }

    this.setState((state, props) => ({
      is_reply: !state.is_reply
    }),()=>{
      if(!this.state.is_reply)
      this.child.deleteEditor()
    });

  }

  handleClick = () => {
    const { topic_id, fechReplies, item } = this.props;
    const reply_id = item.id;
    const content = `@${item.author.loginname} ${this.state.content}`
    if (!content) {
      Toast.info("内容不能为空", 1);
      return false;
    }
    fechReplies({content,id:topic_id,reply_id})
    this.child.clearEditor()
    this.setState({
      is_reply: !this.state.is_reply
    })
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
    const { item, timeagoInstance } = this.props;
    return (
      <Fragment>
        <Item key={item.id} wrap>
          <div className={style["comment-head"]}>
            <div className={style["comment-head-left"]}>
              <img src={item.author.avatar_url} alt={item.author.loginname} />
              <Link to={`/user/${item.author.loginname}`}>
                {item.author.loginname}
              </Link>
              <span style={{ fontSize: "13px", color: "#666" }}>
                &nbsp;&nbsp;
                {timeagoInstance.format(item.create_at, "zh_CN")}
              </span>
            </div>
            <div className={style["comment-head-right"]}>
              <i className="icon iconfont" onClick={this.handleUp}>
                &#xe7c8;
              </i>
              &nbsp;
              {item.ups.length && item.ups.length}
              <i className="icon iconfont" onClick={this.handleReply} >&#xec45;</i>
            </div>
          </div>
          <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </Item>
        {this.state.is_reply && this.renderEidtor()}
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
    { fechRepliesUp, fechReplies }
  )(CommentItem)

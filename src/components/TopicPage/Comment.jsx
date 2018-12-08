import React, { PureComponent, Fragment } from "react";
import { List, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";
import Editor from "../public/Editor";
import style from "./index.scss";
const Item = List.Item;

class Comment extends PureComponent {
  render() {
    const { replies, timeagoInstance } = this.props;
    return (
      <Fragment>
        <List
          renderHeader={() => `${replies.length} 条回复`}
          className="my-list"
        >
          {replies.map(item => {
            return (
              <Item key={item.id} wrap>
                <div className={style["comment-head"]}>
                  <div className={style["comment-head-left"]}>
                    <img
                      src={item.author.avatar_url}
                      alt={item.author.loginname}
                    />
                    <Link to={`/user/${item.author.loginname}`}>
                      {item.author.loginname}
                    </Link>
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      &nbsp;&nbsp;
                      {timeagoInstance.format(item.create_at, "zh_CN")}
                    </span>
                  </div>
                  <div className={style["comment-head-right"]}>
                    <i className="icon iconfont">&#xe7c8;</i>&nbsp;
                    {item.ups.length && item.ups.length}
                    <i className="icon iconfont">&#xec45;</i>
                  </div>
                </div>
                <article
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Item>
            );
          })}
        </List>
        <WhiteSpace />
        <h4 className={style["comment-add"]}>添加回复</h4>
        <WhiteSpace />
        <Editor />
        <WhiteSpace />
      </Fragment>
    );
  }
}

export default Comment;

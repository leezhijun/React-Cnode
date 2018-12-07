import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fechTopic } from "../../actions/topic.js";
import { withRouter, Link } from "react-router-dom";
import { WhiteSpace, WingBlank, Icon } from "antd-mobile";
import Comment from './Comment'
import timeago from "timeago.js";
import style from "./index.scss";
import "github-markdown-css";

class Topic extends Component {

  componentDidMount() {
    const { match, fechTopic } = this.props;
    let id = match.params.id;
    // console.log(id)
    fechTopic({ id });
  }

  renderContent = topic => {
    return (
      <article className={style.topic}>
        <WingBlank>
          <div className={style["topic-head"]}>
            <div className={style["topic-head-left"]}>
              <div className={style["topic-head-img"]}>
                <img src={topic.author.avatar_url} alt={topic.author.loginname} />
              </div>
              <div>
                <div className={style["topic-head-user"]}>
                  <Link to={`/user/${topic.author.loginname}`}>
                    {topic.author.loginname}
                  </Link>
                  &nbsp;&nbsp;{timeago().format(topic.last_reply_at, "zh_CN")}
                </div>
                <div className={style["topic-head-info"]}>
                  阅读&nbsp;&nbsp;{topic.visit_count}
                  &nbsp;&nbsp;回复&nbsp;&nbsp;{topic.reply_count}
                </div>
              </div>
            </div>
            <div className={style["topic-head-collect"]}>
              <div>收藏</div>
              <i className="icon iconfont">&#xe7df;</i>
            </div>
          </div>
          <h1>{topic.title}</h1>
          <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
          <Comment />
        </WingBlank>
      </article>
    );
  };

  render() {
    const { topic } = this.props;
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          {topic.loading ? (
            <WingBlank>
              <Icon type="loading" />
            </WingBlank>
          ) : (
            this.renderContent(topic.data)
          )}
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    topic: state.topic
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fechTopic }
  )(Topic)
);

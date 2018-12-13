import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fechTopic, fechCollect, fechDe_collect } from "../../actions/topic.js";
import { withRouter, Link } from "react-router-dom";
import { WhiteSpace, WingBlank, Icon, Toast } from "antd-mobile";
import { Helmet } from "react-helmet";
import Comment from "./Comment";
import timeago from "timeago.js";
import style from "./index.scss";
import "github-markdown-css";

const timeagoInstance = timeago();

class Topic extends Component {
  state ={
    id:null
  }
  componentDidMount() {
    const { match, fechTopic } = this.props;
    const id = match.params.id;
    this.setState({
      id
    })
    // console.log(id)
    fechTopic({ id });
  }

  collectHandle = () => {
    const { match, fechCollect, login } = this.props;
    const id = match.params.id;
    if (login.data.accesstoken) {
      fechCollect({ id });
    } else {
      Toast.info("请登陆后操作", 1);
    }
  };

  de_collectHandle = () => {
    const { match, fechDe_collect, login } = this.props;
    const id = match.params.id;
    if (login.data.accesstoken) {
      fechDe_collect({ id });
    } else {
      Toast.info("请登陆后操作", 1);
    }
  };

  renderContent = (topic, is_collect, id) => {
    return (
      <Fragment>
        <Helmet>
          <title>{topic.title}</title>
        </Helmet>
        <article className={style.topic}>
          <WingBlank>
            <div className={style["topic-head"]}>
              <div className={style["topic-head-left"]}>
                <div className={style["topic-head-img"]}>
                  <img
                    src={topic.author.avatar_url}
                    alt={topic.author.loginname}
                  />
                </div>
                <div>
                  <div className={style["topic-head-user"]}>
                    <Link to={`/user/${topic.author.loginname}`}>
                      {topic.author.loginname}
                    </Link>
                    &nbsp;&nbsp;
                    {timeagoInstance.format(topic.last_reply_at, "zh_CN")}
                  </div>
                  <div className={style["topic-head-info"]}>
                    阅读&nbsp;&nbsp;{topic.visit_count}
                    &nbsp;&nbsp;回复&nbsp;&nbsp;{topic.reply_count}
                  </div>
                </div>
              </div>
              <div className={style["topic-head-collect"]}>
                <div>收藏</div>
                {is_collect ? (
                  <div onClick={this.de_collectHandle}>
                    <i className="icon iconfont">&#xe86a;</i>
                  </div>
                ) : (
                  <div onClick={this.collectHandle}>
                    <i className="icon iconfont">&#xe7df;</i>
                  </div>
                )}
              </div>
            </div>
            <h1>{topic.title}</h1>
            <article
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: topic.content }}
            />
            <Comment
              replies={topic.replies}
              timeagoInstance={timeagoInstance}
              id={id}
            />
          </WingBlank>
        </article>
      </Fragment>
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
          ) : topic.error ? (
            <WingBlank>
              <Icon type="cross-circle" /> {topic.error}
            </WingBlank>
          ) : (
            this.renderContent(topic.data, topic.is_collect, this.state.id)
          )}
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    topic: state.topic,
    login: state.login
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fechTopic, fechCollect, fechDe_collect }
  )(Topic)
);

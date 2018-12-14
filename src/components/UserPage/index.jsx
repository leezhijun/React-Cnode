import React, { PureComponent, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Tabs, List, WhiteSpace, WingBlank, Icon } from "antd-mobile";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fechUser } from "../../actions/user";
import timeago from "timeago.js";
import style from "./index.scss";
const timeagoInstance = timeago();

const tabs = [{ title: "最近发表" }, { title: "最新回复" }];
const Item = List.Item;

class UserPage extends PureComponent {
  componentDidMount() {
    const { match, fechUser } = this.props;
    let loginname = match.params.loginname;
    fechUser({ loginname });
  }

  renderContent = user => {
    return (
      <div className={style["userinfo"]}>
        <Helmet>
          <title>{user.loginname} 个人主页</title>
        </Helmet>
        <WingBlank>
          <div className={style["user"]}>
            <img src={user.avatar_url} alt={user.loginname} />
            <div className={style["loginname"]}>{user.loginname}</div>
            <div className={style["user-message"]}>
              积分：{user.score}&nbsp;&nbsp;&nbsp;&nbsp;创建：
              {timeagoInstance.format(user.create_at, "zh_CN")}
            </div>
            <Tabs
              tabs={tabs}
              initialPage={0}
              onChange={(tab, index) => {
                console.log("onChange", index, tab);
              }}
              onTabClick={(tab, index) => {
                console.log("onTabClick", index, tab);
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff"
                }}
              >
                {user.recent_topics.map(item => (
                  <Link key={item.id} to={`/topic/${item.id}`}>
                    <Item extra={timeagoInstance.format(item.last_reply_at, "zh_CN")}>
                      {item.title}
                    </Item>
                  </Link>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: "#fff"
                }}
              >
                {user.recent_replies.map(item => (
                  <Link key={item.id} to={`/topic/${item.id}`}>
                    <Item extra={timeagoInstance.format(item.last_reply_at, "zh_CN")}>
                      {item.title}
                    </Item>
                  </Link>
                ))}
              </div>
            </Tabs>
          </div>
        </WingBlank>
      </div>
    );
  };

  render() {
    const { loading, error, data } = this.props.user;
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          {loading ? (
            <WingBlank>
              <Icon type="loading" />&nbsp;loading...
            </WingBlank>
          ) : error ? (
            <WingBlank>
              <Icon type="cross-circle" /> {error}
            </WingBlank>
          ) : (
            this.renderContent(data)
          )}
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fechUser }
  )(UserPage)
);

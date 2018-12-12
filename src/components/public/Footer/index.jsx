import React, { PureComponent } from "react";
import { TabBar } from "antd-mobile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "indexTab",
      hidden: false,
      fullScreen: true
    };
  }

  render() {
    const { history, login } = this.props;
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", width: "100%", bottom: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={
              <i className="iconfont icon-home" style={{ fontSize: "22px" }} />
            }
            selectedIcon={
              <i className="iconfont icon-home" style={{ fontSize: "22px" }} />
            }
            selected={this.state.selectedTab === "indexTab"}
            onPress={() => {
              this.setState({
                selectedTab: "indexTab"
              });
              history.push("/");
            }}
            data-seed="logId"
          />
          <TabBar.Item
            icon={
              <i className="iconfont icon-edit" style={{ fontSize: "22px" }} />
            }
            selectedIcon={
              <i className="iconfont icon-edit" style={{ fontSize: "22px" }} />
            }
            title="发表"
            key="publish"
            selected={this.state.selectedTab === "publishTab"}
            onPress={() => {
              this.setState({
                selectedTab: "publishTab"
              });
              login.data.accesstoken ? history.push("/publish") : history.push("/login")
            }}
            data-seed="logId1"
          />
          <TabBar.Item
            icon={
              <i className="iconfont icon-bell" style={{ fontSize: "22px" }} />
            }
            selectedIcon={
              <i className="iconfont icon-bell" style={{ fontSize: "22px" }} />
            }
            title="消息"
            key="message"
            dot
            selected={this.state.selectedTab === "messageTab"}
            onPress={() => {
              this.setState({
                selectedTab: "messageTab"
              });
              login.data.accesstoken ? history.push("/message") : history.push("/login")
            }}
          />
          <TabBar.Item
            icon={
              <i className="iconfont icon-user" style={{ fontSize: "22px" }} />
            }
            selectedIcon={
              <i className="iconfont icon-user" style={{ fontSize: "22px" }} />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === "myTab"}
            onPress={() => {
              this.setState({
                selectedTab: "myTab"
              });
              login.data.accesstoken ? history.push(`/user/${login.data.loginname}`) : history.push("/login")
            }}
          />
        </TabBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Footer)
);

import React, { Component, Fragment } from "react";
import { Tabs, WhiteSpace, Icon } from "antd-mobile";
import List from "../List";
import { Helmet } from "react-helmet";
class IndexPage extends Component {
  renderContent = tab => (
    <div style={{ backgroundColor: "#fff" }}>
      <List tab={tab.key} />
    </div>
  );

  scrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render() {
    const tabs = [
      { title: "全部", key: "all" },
      { title: "精华", key: "good" },
      { title: "分享", key: "share" },
      { title: "问答", key: "ask" },
      { title: "招聘", key: "job" }
      // { title: '客户端测试', key:'dev' },
    ];

    return (
      <Fragment>
        <WhiteSpace />
        <Helmet>
          <title>CNode：Node.js专业中文社区</title>
          <meta name="description" content="CNode：Node.js专业中文社区" />
        </Helmet>
        <div className="main">
          <Tabs
            tabs={tabs}
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
          >
            {this.renderContent}
          </Tabs>
        </div>
        <div className="top" onClick={this.scrollTop}>
          <Icon type="up" />
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

export default IndexPage;

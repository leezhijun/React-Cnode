import React, { Component, Fragment } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import List from '../List'
class IndexPage extends Component {
  renderContent = tab =>
    (<div style={{ backgroundColor: '#fff' }}>
      <List tab={tab.key} />
    </div>);

  render() {
    const tabs = [
      { title: '全部', key:'all' },
      { title: '精华', key:'good' },
      { title: '分享', key:'share' },
      { title: '问答', key:'ask' },
      { title: '招聘', key:'job' },
      // { title: '客户端测试', key:'dev' },
    ];

    return (
      <Fragment>
        <WhiteSpace />
        <div className='main'>
          <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
            {this.renderContent}
          </Tabs>
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

export default IndexPage

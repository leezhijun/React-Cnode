import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'indexTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 400 }}>
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
            icon={<i className='iconfont icon-home' style={{ fontSize: '22px' }}></i>}
            selectedIcon={<i className='iconfont icon-home' style={{ fontSize: '22px' }}></i>
            }
            selected={this.state.selectedTab === 'indexTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'indexTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-edit' style={{ fontSize: '22px' }}></i>}
            selectedIcon={<i className='iconfont icon-edit' style={{ fontSize: '22px' }}></i>}
            title="发表"
            key="publish"
            selected={this.state.selectedTab === 'publishTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'publishTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-bell' style={{ fontSize: '22px' }}></i>}
            selectedIcon={<i className='iconfont icon-bell' style={{ fontSize: '22px' }}></i>}
            title="消息"
            key="message"
            dot
            selected={this.state.selectedTab === 'messageTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'messageTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-user' style={{ fontSize: '22px' }}></i>}
            selectedIcon={<i className='iconfont icon-user' style={{ fontSize: '22px' }}></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'myTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer

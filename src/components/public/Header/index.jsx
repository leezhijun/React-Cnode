import React, { PureComponent } from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

class Header extends PureComponent {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    console.log(opt.props.value)
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render(){
    return(
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="1" value="reload" data-seed="logId">刷新</Item>),
              (<Item key="2" value="login" style={{ whiteSpace: 'nowrap' }}>登录</Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >Cnode 社区(个人版)</NavBar>
    )
  }
}
export default Header

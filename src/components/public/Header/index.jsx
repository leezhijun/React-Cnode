import React, { PureComponent } from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginOut, pageRefresh } from '../../../actions/login'

const Item = Popover.Item;

class Header extends PureComponent {

  constructor(props) {
    super(props)
    const { pageRefresh } = this.props
    if (!this.props.login.data.accesstoken) {
      pageRefresh()
    }
  }

  state = {
    visible: false,
    selected: '',
  };

  onSelect = (opt) => {
    // console.log(opt.props.value)
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    switch(opt.props.value){
      case 'reload': // 刷新
      this.props.history.go()
      break
      case 'login': // 登陆
      this.props.history.replace('/login')
      break
      case 'logout': // 退出登陆
      this.props.loginOut()
      this.props.history.go()
      break
    }
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render(){
    const { history, login } = this.props;
    let overlay =null;
    if (login.data.accesstoken ) {
      overlay = [
        (<Item key="1" value="reload" icon={<i className='iconfont icon-reload'></i>}>刷新</Item>),
          (<Item key="2" value="logout" icon={<i className='iconfont icon-logout'></i>}>退出</Item>)
      ]
    }else {
      overlay = [
        (<Item key="1" value="reload" icon={<i className='iconfont icon-reload'></i>}>刷新</Item>),
        (<Item key="2" value="login" icon={<i className='iconfont icon-login'></i>}>登陆</Item>)
      ]
    }

    return(
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={overlay}
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

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default withRouter(connect(
  mapStateToProps,
  { loginOut, pageRefresh }
)(Header))


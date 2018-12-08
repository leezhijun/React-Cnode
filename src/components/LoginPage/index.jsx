import React, { PureComponent, Fragment } from "react";
import { WhiteSpace, Button } from "antd-mobile";
import style from './index.scss'
class LoginPage extends PureComponent {
  state = {
    accesstoken: ""
  }
  changeHandle = (e) => {
    this.setState({
      accesstoken: e.target.value
    });
  }
  render() {
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          <div className={style['login']}>
            <input
              type="text"
              placeholder="AccessToken"
              onChange={this.changeHandle}
              value={this.state.accesstoken}
            />
            <WhiteSpace />
            <Button type="primary" >登录</Button>
          </div>
        </div>
        <WhiteSpace />
      </Fragment>
    )
  }
}

export default LoginPage;

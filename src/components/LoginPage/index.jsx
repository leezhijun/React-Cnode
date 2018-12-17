import React, { PureComponent, Fragment } from "react";
import { WhiteSpace, Button, Toast } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fechLogin } from "../../actions/login";
import style from "./index.scss";
class LoginPage extends PureComponent {
  state = {
    accesstoken: ""
  };

  changeHandle = e => {
    this.setState({
      accesstoken: e.target.value
    });
  };

  handleClick = () => {
    const { fechLogin } = this.props;
    const accesstoken = this.state.accesstoken;
    fechLogin({ accesstoken });
  };

  componentWillReceiveProps (nextprops) {
    const { login, history } = nextprops
    if (login.loading) {
      Toast.loading('Loading...', 1)
      return false
    }
    if (login.error) {
      Toast.fail(login.error, 1)
      return false
    }
    if (login.data.loginname) {
      Toast.success('登录成功!', 1, () => {
        // history.push(`/user/${login.data.loginname}`)
        history.goBack()
      })
    }
  }

  render() {
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          <div className={style["login"]}>
            <input
              type="text"
              placeholder="AccessToken"
              onChange={this.changeHandle}
              value={this.state.accesstoken}
            />
            <Button type="primary" onClick={this.handleClick}>
              登录
            </Button>
          </div>
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default withRouter(connect(
  mapStateToProps,
  { fechLogin }
)(LoginPage))

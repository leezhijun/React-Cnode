import React, { PureComponent, Fragment } from "react";
import {
  Accordion,
  List,
  WhiteSpace,
  Badge,
  WingBlank,
  Icon
} from "antd-mobile";
import { connect } from "react-redux";
import { fechMsg } from "../../actions/message";
import { withRouter, Link } from "react-router-dom";
class MsgPage extends PureComponent {
  componentDidMount() {
    const { fechMsg, login, history } = this.props;
    if (login.data.accesstoken) {
      fechMsg();
    } else {
      history.push("/login");
    }
  }

  renderContent = message => {
    return (
      <Fragment>
        <Accordion
          // defaultActiveKey="0"
          className="my-accordion"
          onChange={this.onChange}
        >
          <Accordion.Panel
            header={
              <div>
                未读消息&nbsp;&nbsp;
                <Badge
                  text={77}
                  overflowCount={message.hasnot_read_messages.length}
                />
              </div>
            }
          >
            <WingBlank>
              <List className="my-list">
                {message.hasnot_read_messages.map(item => (
                  <List.Item key="item.id">
                    <Link to={`/topic/${item.topic.id}`}>
                      {item.topic.title}
                    </Link>
                  </List.Item>
                ))}
              </List>
            </WingBlank>
          </Accordion.Panel>
        </Accordion>
        <Accordion
          // defaultActiveKey="0"
          className="my-accordion"
          onChange={this.onChange}
        >
          <Accordion.Panel
            header={
              <div>
                已读消息&nbsp;&nbsp;
                <Badge
                  text={77}
                  overflowCount={message.has_read_messages.length}
                />
              </div>
            }
          >
            <WingBlank>
              <List className="my-list">
                {message.has_read_messages.map(item => (
                  <List.Item key="item.id">
                    <Link to={`/topic/${item.topic.id}`}>
                      {item.topic.title}
                    </Link>
                  </List.Item>
                ))}
              </List>
            </WingBlank>
          </Accordion.Panel>
        </Accordion>
      </Fragment>
    );
  };

  render() {
    const { message } = this.props;
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          {message.loading ? (
            <WingBlank>
              <Icon type="loading" />
              &nbsp;loading...
            </WingBlank>
          ) : message.error ? (
            <WingBlank>
              <Icon type="cross-circle" /> {message.error}
            </WingBlank>
          ) : (
            this.renderContent(message.data)
          )}
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    login: state.login
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fechMsg }
  )(MsgPage)
);

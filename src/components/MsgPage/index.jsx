import React, { PureComponent, Fragment } from "react";
import { Accordion, List, WhiteSpace, Badge } from "antd-mobile";
class MsgPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <WhiteSpace />
        <div className="main">
          <Accordion
            defaultActiveKey="0"
            className="my-accordion"
            onChange={this.onChange}
          >
            <Accordion.Panel
              header={
                <div>
                  未读消息&nbsp;&nbsp;
                  <Badge text={77} overflowCount={11} />
                </div>
              }
            >
              <List className="my-list">
                <List.Item>content 1</List.Item>
                <List.Item>content 2</List.Item>
                <List.Item>content 3</List.Item>
              </List>
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
                  <Badge text={77} overflowCount={11} />
                </div>
              }
            >
              <List className="my-list">
                <List.Item>content 1</List.Item>
                <List.Item>content 2</List.Item>
                <List.Item>content 3</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>
        </div>
        <WhiteSpace />
      </Fragment>
    );
  }
}

export default MsgPage;

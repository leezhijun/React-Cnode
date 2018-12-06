import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fechTopic } from "../../actions/topic.js";
import { withRouter, Link } from "react-router-dom";
import {
  ActivityIndicator,
  WhiteSpace,
  WingBlank,
  Flex,
  Toast
} from "antd-mobile";
import style from "./index.scss";
import 'github-markdown-css'
class Topic extends Component {
  componentDidMount() {
    const { match, fechTopic } = this.props
    let id = match.params.id
    // console.log(id)
    fechTopic({id})
  }
  render() {
    const {topic} = this.props
    return (
      <Fragment>
        <article className={style["topic"]}>
          <WingBlank>
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <h1>{topic.title}</h1>
            <article className='markdown-body' dangerouslySetInnerHTML = {{ __html: topic.content }}></article>
          </WingBlank>
        </article>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topic: state.topic
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { fechTopic }
  )(Topic)
);

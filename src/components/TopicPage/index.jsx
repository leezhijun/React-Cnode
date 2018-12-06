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
import style from './index.scss'
import 'github-markdown-css';

class Topic extends Component {

  componentDidMount() {
    const { match, fechTopic } = this.props
    let id = match.params.id
    // console.log(id)
    fechTopic({id})
  }

  componentWillReceiveProps(nextProps) {
    const {topic} = nextProps

  }

  renderContent = (topic) => {
    return (
      <Fragment>
        <WhiteSpace />
        <article className={style.topic}>
          <WingBlank>
            <div className={style['topic-head']}>
              <div className={style['topic-head-left']}>
                <div className={style['topic-head-img']}><img src={topic.author.avatar_url} /></div>
                <div>
                  <div>{topic.author.loginname}</div>
                  <div className={style['topic-head-info']}>浏览:{topic.visit_count} | 回复:{topic.reply_count}</div>
                </div>
              </div>
              <div>收藏</div>
            </div>
            <h1>{topic.title}</h1>
            <article className='markdown-body' dangerouslySetInnerHTML = {{ __html: topic.content }}></article>
          </WingBlank>
        </article>
        <WhiteSpace />
      </Fragment>
    );
  }

  render() {
    const {topic} = this.props
    return (
      <Fragment>
        { topic.loading ? 'loading' : this.renderContent(topic.data) }
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

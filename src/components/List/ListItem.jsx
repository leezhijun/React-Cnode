import React, { PureComponent } from "react";
import style from './ListItem.scss'
import { withRouter, Link } from 'react-router-dom'
class ListItem extends PureComponent {
  getTab = (tab) => {
    const tabArr = {
      all:'全部',
      good:'精华',
      share:'分享',
      job:'招聘',
      ask:'问答',
      dev:'客户端测试'
    }
    return tabArr[tab]
  }
  getDes = (string) => {
    string = string.replace(/<\/?[^>]*>/g, '') // 去除HTML Tag
    string = string.replace(/[|]*\n/, '') // 去除行尾空格
    string = string.replace(/&npsp;/ig, '') // 去掉npsp
    return string.substring(0,160)
  }
  render() {
    const { obj } = this.props;
    return (
      <div key={obj.id} className={style['topic-item']}>
        <div className={style['item-titile']}>
          <span className={(obj.top||obj.good)&&style['top']}>{ obj.top ? '置顶': (obj.good? '精华': this.getTab(obj.tab))}</span>
          <Link to={`/topic/${obj.id}`}>{obj.title}</Link>
        </div>
        <div className={style['item-content']}>
          <div className={style['item-des']}>{this.getDes(obj.content)}</div>
        </div>
        <div className={style['item-footer']}>
          <div className={style['item-footer-user']}><img src={obj.author.avatar_url} />{obj.author.loginname}</div>
          <div className={style['item-footer-right']}>浏览:{obj.visit_count}&nbsp;|&nbsp;评论:{obj.reply_count}&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default ListItem

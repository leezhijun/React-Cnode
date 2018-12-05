import React, { PureComponent } from "react";
import style from './ListItem.scss'
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
  render() {
    const { obj } = this.props;
    return (
      <div key={obj.id} className={style['topic-item']}>
        <div className={style['item-titile']}>
          <span className={obj.top&&style['top']}>{ obj.top ? '置顶': this.getTab(obj.tab)}</span>{obj.title}
        </div>
        <div
          style={{ display: "-webkit-box", display: "flex", padding: "15px 0" }}
        >
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: "8px" }}>{obj.des}</div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default ListItem

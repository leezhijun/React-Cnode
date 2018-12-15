import React, { PureComponent, Fragment } from "react";
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView, WhiteSpace, WingBlank } from "antd-mobile";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { fechTopics } from "../../actions/list";

// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
// const NUM_ROWS = 20;
// let pageIndex = 0;

// function genData(pIndex = 0) {
//   const dataBlob = {};
//   for (let i = 0; i < NUM_ROWS; i++) {
//     const ii = (pIndex * NUM_ROWS) + i;
//     dataBlob[`${ii}`] = `row - ${ii}`;
//   }
//   return dataBlob;
// }

class List extends PureComponent {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    const { tab, topics } = this.props;
    const data = topics[tab]["data"];
    if(topics[tab]["data"].length){
      this.state = {
        dataSource:dataSource.cloneWithRows(data),
        isLoading: true
      };
    }else{
      this.state = {
        dataSource,
        isLoading: true
      };
    }

  }

  componentDidMount() {
    const { tab, fechTopics, topics } = this.props;
    if(!topics[tab]["data"].length){ // 判断是否为空
      const page = topics[tab]["page"]; // 当前页码
      const limit = topics[tab]["limit"]; // 调用条数
      fechTopics({ tab, page, limit });
    }
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    const { tab, topics } = nextProps;
    const data = topics[tab]["data"];
    if (data !== this.props.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoading: false
      });
    }
  }

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    console.log(123);
    // if (this.state.isLoading && !this.state.hasMore) {
    //   return;
    // }
    // console.log('reach end', event);
    this.setState({ isLoading: true });
    const { tab, fechTopics, topics } = this.props;
    const page = topics[tab]["page"]; // 当前页码
    const limit = topics[tab]["limit"]; // 调用条数
    fechTopics({ tab, page, limit });
    // console.log(tab, page);
  };

  render() {
    const { tab, topics } = this.props;
    // const separator = (sectionID, rowID) => (
    //   <div
    //     key={`${sectionID}-${rowID}`}
    //     style={{
    //       backgroundColor: "#F5F5F9",
    //       height: 8,
    //       borderTop: "1px solid #ECECED",
    //       borderBottom: "1px solid #ECECED"
    //     }}
    //   />
    // );
    const row = rowData => {
      return <ListItem obj={rowData} />;
    };
    return (
      <Fragment>
        {topics[tab]["error"] ? (
          <div>
            <WhiteSpace />
            <WingBlank>{topics[tab]["error"]}</WingBlank>
            <WhiteSpace />
          </div>
        ) : (
          <ListView
            ref={el => (this.lv = el)}
            dataSource={this.state.dataSource}
            // renderHeader={() => <span>header</span>}
            renderFooter={() => (
              <div style={{ padding: 30, textAlign: "center" }}>
                {this.state.isLoading ? "Loading..." : "Loaded"}
              </div>
            )}
            renderRow={row}
            // renderSeparator={separator}
            className="am-list"
            initialListSize={topics[tab]["data"].length ? topics[tab]["data"].length : 20}
            pageSize={20}
            useBodyScroll
            // onScroll={() => {
            //   console.log("scroll");
            // }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

export default connect(
  mapStateToProps,
  { fechTopics }
)(List);

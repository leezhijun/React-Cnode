import React, { Component } from 'react';
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView } from 'antd-mobile';
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { fechTopics } from '../../actions/list'

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
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0,NUM_ROWS) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class List extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    const {tab,topics} = props
    this.initData = topics[tab]['data']
    this.state = {
      dataSource:dataSource.cloneWithRows(this.initData),
      isLoading: true,
    };
  }

  componentDidMount() {
    const { fechTopics, tab, topics } = this.props
    const { page , limit } = topics[tab]
    const payload = { tab, page , limit }
    fechTopics(payload)
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    const {tab, topics} = nextProps
    // console.log(topics[tab]['data'])
    this.initData = topics[tab]['data'];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        isLoading: false,
    });
    // if (topics[tab]['data'] !== this.state.dataSource) {
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(topics[tab]['data']),
    //     isLoading: false
    //   });
    // }
  }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    // if (this.state.isLoading && !this.state.hasMore) {
    //   return;
    // }
    // console.log('reach end', event);
    // this.setState({ isLoading: true });
    // setTimeout(() => {
    //   // this.rData = { ...this.rData, ...genData(++pageIndex) };
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 1000);
  }

  render() {
    const { tab, topics } = this.props
    const data = topics[tab]['data']
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length ;
    const row = () => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[data.length - index--];
      return (
        <ListItem obj={obj} />
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        initialListSize={10}
        pageSize={20}
        useBodyScroll
        // onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}


const mapStateToProps = (state) =>{
  return {
    topics:state.topics
  }
}


export default connect(mapStateToProps,{ fechTopics })(List)

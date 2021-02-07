import React, { Component } from "react";
import { Button, Rate, Row, Col, Divider, Spin } from "antd";
import { connect } from "react-redux";
import { PlusSquareOutlined, ContainerTwoTone } from "@ant-design/icons";
import { postAction } from "../actions/postAction";
import { loadAction } from "../actions/loadAction";
import { addCountAction, reduceCountAction } from "../actions/countAction";
import MyComment from "./myComment";
class GroupList extends Component {
  constructor(props) {
    super(props);
  }
  handlePostClick = () => {
    this.props.dispatch(postAction);
    this.props.dispatch(loadAction);
  };
  handleAddClick = () => {
    this.props.dispatch(addCountAction);
  };
  handleReduceClick = () => {
    this.props.dispatch(reduceCountAction);
  };
  render() {
    const { list } = this.props.post;
    const { count } = this.props.count;
    const { load } = this.props.load;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Button icon={<ContainerTwoTone />} onClick={this.handlePostClick}>
              获取数据
            </Button>
          </Col>
          <Col>
            <Button icon={<PlusSquareOutlined />} onClick={this.handleAddClick}>
              计数值+1
            </Button>
          </Col>
          <Col>
            <Button
              icon={<PlusSquareOutlined />}
              onClick={this.handleReduceClick}
            >
              计数值-1
            </Button>
          </Col>
          <Col style={{ marginLeft: 20 }}>
            <Rate count="10" value={count}></Rate>
          </Col>
        </Row>

        <Divider />
        <Spin spinning={load} tip="正在获取数据..." />
        <MyComment list={list} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
    count: state.count,
    load: state.load,
  };
};
export default connect(mapStateToProps)(GroupList);

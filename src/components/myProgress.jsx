import React, { Component } from "react";
import { Progress } from "antd";
class MyProgress extends Component {
  render() {
    return (
      <div style={{ width: 170 }}>
        <h2>Progress:</h2>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
    );
  }
}

export default MyProgress;

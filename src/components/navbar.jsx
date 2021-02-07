import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
class Navbar extends Component {
  render() {
    const { count } = this.props;
    return (
      <Menu mode="horizontal" theme="dark" onClick={this.handleClick}>
        <Menu.Item key="groupList" icon={<MailOutlined />}>
          <NavLink to="/groupList">dataShow</NavLink>
        </Menu.Item>
        <Menu.Item key="progress" icon={<AppstoreOutlined />}>
          <NavLink to="/progress">Progress</NavLink>
        </Menu.Item>
        <Menu.Item key="timeline" icon={<SettingOutlined />}>
          <NavLink to="/timeline">Timeline</NavLink>
        </Menu.Item>
        <Menu.Item
          key="stars"
          style={{ marginLeft: 200 }}
          icon={<StarFilled />}
        >
          stars: {count < 10 ? count : "满分"}
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;

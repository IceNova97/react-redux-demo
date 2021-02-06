import "./App.css";
import GroupList from "./components/groupList";
import { connect } from "react-redux";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const App = (props) => {
  const { Header, Content } = Layout;
  const { count } = props.count;
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Navigation Three
          </Menu.Item>
          <Menu.Item
            key="stars"
            style={{ marginLeft: 200 }}
            icon={<StarFilled />}
          >
            stars: {count}
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="my-content"
        style={{
          paddingLeft: 300,
          paddingRight: 300,
          background: "white",
        }}
      >
        <GroupList />
      </Content>
    </Layout>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(App);

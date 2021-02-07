import "./App.css";
import GroupList from "./components/groupList";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MyProgress from "./components/myProgress";
import MyTimeline from "./components/myTimeline";
import { Layout } from "antd";
import Navbar from "./components/navbar";

const App = (props) => {
  const { Header, Content } = Layout;
  const { count } = props.count;
  return (
    <Layout>
      <Header>
        <Navbar count={count} />
      </Header>
      <Content
        style={{
          paddingLeft: 300,
          paddingRight: 300,
          paddingTop: 30,
          background: "white",
        }}
      >
        <Switch>
          <Route path="/groupList" component={GroupList} />
          <Route path="/progress" component={MyProgress} />
          <Route path="/timeline" component={MyTimeline} />
          <Route path="/" exact component={GroupList} />
        </Switch>
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

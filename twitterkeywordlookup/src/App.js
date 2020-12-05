import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import  Main from './Components/Main';
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header>
                  <Navigation>
                      <Link to="/"> FrontPage</Link>
                      <Link to="/KeywordSearch">KeywordSearch</Link>
                      
                  </Navigation>
              </Header >
              <Drawer classname="menu_nav" title="Menu">
                  <Navigation>
                      <Link to="/"> FrontPage</Link>
                      <Link to="/KeywordSearch">KeywordSearch</Link>
                      
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}
export default App;
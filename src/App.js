import React, { Component } from 'react';
// import Immutable from 'immutable';
import Navrouter from './router';
import 'antd/dist/antd.less';
import 'ant-design-pro/dist/ant-design-pro.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navrouter />
      </div>
    );
  }
}

export default App;
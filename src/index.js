import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navrouter from './router';
import 'antd/dist/antd.less';
import 'ant-design-pro/dist/ant-design-pro.css'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navrouter/>, document.getElementById('root'));
registerServiceWorker();

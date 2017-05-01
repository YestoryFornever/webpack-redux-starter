import { connect } from 'react-redux';
import App from '../components/app';

// 包装 component ，注入 dispatch 和 state 到其默认的 connect()(App) 中；
export default connect()(App);

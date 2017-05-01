import { connect } from 'react-redux';
import { addTodo } from '../actions'
import App from '../components/app';

function dispatchProps(dispatch){
	return {
		onAddClick:(text) =>{
			dispatch(addTodo(text))
		}
	}
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect()(App) 中；
export default connect(
	undefined,/*state->props,dispatch->props*/
	dispatchProps/*state->props,dispatch->props*/
)(App);

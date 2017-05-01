import { connect } from 'react-redux';
import { addTodo,toggleTodo,setVisibilityFilter } from '../actions'
import App from '../components/app';

function select(state){
	return {
		visibleTodos: state.todos,
		visibilityFilter: state.visibilityFilter
	}
}

function dispatchProps(dispatch){
	return {
		onAddClick:(text) =>{
			dispatch(addTodo(text))
		},
		onTodoClick:(index)=>{
			dispatch(toggleTodo(index))
		},
		onFilterChange:(nextFilter)=>{
			dispatch(setVisibilityFilter(nextFilter))
		}
	}
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect()(App) 中；
export default connect(
	select,/*state->props,dispatch->props*/
	dispatchProps/*state->props,dispatch->props*/
)(App);

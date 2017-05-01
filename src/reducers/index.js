import { combineReducers } from 'redux';
import { todos } from './todos.reducer';

const fnReducers = combineReducers({
	todos
})

export default fnReducers

/*export default function fnReducers(state={},action){//不使用combineReducers的写法
	return {
		todos:todos(state.todos,action)
	}
}*/
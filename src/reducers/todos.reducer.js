import { ADD_TODO } from '../actions';

export function todos(state = [], action){
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		default:
			return state
	}
}
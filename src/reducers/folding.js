import { Switch_Menu_Folding } from '../constants/actionTypes'

const initialState = {			//左侧导航栏是否折叠，默认否
	isMenuFolding : false
}


const folding = (state = initialState , action) => {
	switch (action.type) {
		case Switch_Menu_Folding:
			return { ...state , [action.id]: action.isMenuFolding };
		default:
	      	return state
	}
}

export default folding
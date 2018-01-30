import { Change_Theme } from '../constants/actionTypes'


const initialState = {				//默认样式
  	menuBg : '#324157' ,
	menuTextColor : '#bfcbd9' ,
	menuActiveTextColor : '#20a0ff' ,
	headBg : '#242f42'
};

const theme = (state = initialState, action) => {
	switch (action.type) {
		case Change_Theme:
			return { ...state , action.themeObj };
		default:
	      	return state
	}
}


export default theme
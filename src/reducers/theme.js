import { Change_Theme } from '../constants/actionTypes'
import themeObj from '../lib/theme'


const initialState = {				//默认样式
  key : 'theme1' ,
  menuBg : '#324157' ,
	menuTextColor : '#bfcbd9' ,
	menuActiveTextColor : '#20a0ff' ,
	headBg : '#242f42'
};

const theme = (state = initialState, action) => {
	switch (action.type) {
		case Change_Theme:
      let themeKey = action.themeKey;
      return themeObj[themeKey];
		default:
	    return state
	}
}


export default theme

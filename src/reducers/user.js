import { User_List , User_Add , User_Del } from '../constants/actionTypes'

const tableData = (state = [], action) => {
	switch (action.type) {
		//获取列表
		case User_List:
			return action.users;
		//新增对象
		case User_Add:
			return [...state , action.userObj];
		//删除对象
		case User_Del:
			return state.filter(item => item.key !== action.key);
		default:
	    return state
	}
}

export default tableData

import * as types from '../constants/actionTypes'

//菜单栏折叠
const foldingMenu = isFolding => ({
	type : types.Switch_Menu_Folding ,
	id : 'isMenuFolding' ,
	isMenuFolding : isFolding
});


//主题切换
const changeTheme = themeKey => ({
	type : types.Change_Theme ,
	themeKey
});


//表格
const getAllUsers = () => dispatch => {
  fetch('../data/userData.json')
    .then(response => response.json())
    .then(json => dispatch(receiveUsers(json.list)))
}

const receiveUsers = users => ({
  type: types.User_List,
  users
})

const addUser = userObj => ({
  type: types.User_Add,
  userObj
})


const delUser = key => ({
  type: types.User_Del,
  key
})

export {foldingMenu , changeTheme , getAllUsers , addUser , delUser}

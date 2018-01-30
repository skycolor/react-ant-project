import { combineReducers } from 'redux'
import folding from './folding'
import theme from './theme'
import user from './user'


export default combineReducers({
  folding,
  theme,
  user
});
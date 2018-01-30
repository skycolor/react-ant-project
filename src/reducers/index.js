import { combineReducers } from 'redux'
import folding from './folding'
import theme from './theme'
import user from './user'

const reducerIndex = combineReducers({
  folding,
  theme,
  user
});

export default reducerIndex;
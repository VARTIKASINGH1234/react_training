import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import Filter from './reducer-filter';

const allReducers = combineReducers({
  users: UserReducer,
  filter: Filter
});

export default allReducers

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk';

import jobs from './reducers/jobs';
import jobFormData from './reducers/jobFormData';

const reducers = combineReducers({
  jobs,
  jobFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
  );
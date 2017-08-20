import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk';

const jobsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_JOBS_SUCCESS':
      return action.jobs

    default:
      return state;
  }
}

const reducers = combineReducers({
  jobs: jobsReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
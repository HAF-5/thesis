import {combineReducers} from 'redux';
import userReducer from './user';
import websiteReducer from './websites';
import pageReducer from './pages';
import elementReducer from './elements';
import sideMenuElementsReducer from './sideMenuElements';
import selectedPageReducer from './selectedPage';
import lastTenStepsReducer from './../reducers/lastTenSteps';

export default combineReducers({
  user: userReducer,
  websites: websiteReducer,
  pages: pageReducer,
  elements: elementReducer,
  sideMenuElements: sideMenuElementsReducer,
  selectedPage: selectedPageReducer,
  lastTenSteps: lastTenStepsReducer
});
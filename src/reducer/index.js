
import {combineReducers} from "redux";
//import mainReducer from "./changeText";
import saveUserIdReducer from './saveUserId';


const rootReducer = combineReducers({
  saveUserIdReducer,

});
export default rootReducer;

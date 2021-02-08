import {combineReducers} from "redux";
import reducerHome from "../../pages/home/reducerHome";
import {IState} from "./IState";


export default combineReducers<IState>({
  home: reducerHome,
})

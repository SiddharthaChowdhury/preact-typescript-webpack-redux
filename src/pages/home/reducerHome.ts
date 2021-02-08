import { IActionHome, TypeActionHome } from "./actionHome";

export interface IReducerHome {
  value: number;
}

const initialState: IReducerHome = {
  value: 0
}

const reducerHome = (state: IReducerHome = initialState, action: IActionHome): IReducerHome => {
  switch(action.type) {
    case TypeActionHome.Set:
      return {
        ...state,
        value: action.value!
      };
    default:
      return state;
  }
}

export default reducerHome;

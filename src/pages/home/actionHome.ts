import { Action } from "redux";

export enum TypeActionHome {
  Set = "Home > Set > Increment",
}

export interface IActionHome extends Action {
  type: TypeActionHome,
  value?: number;
}

export const actionHomeSetIncrement = (value: number): IActionHome => ({
  type: TypeActionHome.Set,
  value
});

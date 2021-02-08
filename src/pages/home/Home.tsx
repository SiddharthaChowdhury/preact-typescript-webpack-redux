import { h, FunctionComponent, Fragment } from 'preact';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { IState } from '../../setup/redux/IState';
import { actionHomeSetIncrement } from './actionHome';
import { IReducerHome } from './reducerHome';

interface IHomeState {
  homeState: IReducerHome;
}
interface IHomeDispatch {
  onIncrement: (val: number) => Action;
}
interface IHomeProps extends IHomeState, IHomeDispatch {}

const HomeDOM: FunctionComponent<IHomeProps> = ({homeState, onIncrement}) => {

  const increment = (e: any) => {
    onIncrement(homeState.value + 1);
  };

  return (
    <Fragment>
      <h2>Preact-Redux increment example</h2>
      <span>Counter value: {homeState.value}</span>
      &nbsp; <button onClick={increment}>Increment</button>
    </Fragment>
  )
}

const mapState = (state: IState): IHomeState => ({
  homeState: state.home
});

const mapDispatch = (dispatch: Dispatch): IHomeDispatch => ({
  onIncrement: (val: number) => dispatch(actionHomeSetIncrement(val))
})

export default connect(mapState, mapDispatch)(HomeDOM);

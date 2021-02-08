import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./rootReducer";

const middlewares: any = [];
const initialState = {};

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const Store = createStore(rootReducer, initialState, enhancers);

export default Store;

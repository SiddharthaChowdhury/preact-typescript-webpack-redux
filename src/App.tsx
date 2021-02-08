import { h } from 'preact';
import { Provider } from 'react-redux';
import store from './setup/redux/store';
import Home from './pages/home/Home';

const App = () => (
  <Provider store={store}>

    <h1>Hello</h1>
    <Home />
  </Provider>
);

export default App;

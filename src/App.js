import { Provider } from 'react-redux';
import store from './lib/redux.js';

import InboxScreen from './components/InboxScreen';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;

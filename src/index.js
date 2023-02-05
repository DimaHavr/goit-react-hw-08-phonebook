import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <React.StrictMode>
      <PersistGate loading="" persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </React.StrictMode>
  </BrowserRouter>
);

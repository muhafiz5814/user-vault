import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import providers from react-router and react-redux to support navigation and state management.
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';

// Import defined routes and redux store to give as a prop to respective providers.
import { router } from './routes';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

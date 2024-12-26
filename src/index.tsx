import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Make sure the element with id='root' exists in your HTML.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// reportWebVitals(console.log); 

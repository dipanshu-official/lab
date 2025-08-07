import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/globalStore.js';
import { Toaster } from 'react-hot-toast';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster 
      toastOptions={{ duration: 3000 }}
      position='top-bar'
      />
    </Provider>
  </StrictMode>
);



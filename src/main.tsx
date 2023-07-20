import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <WrappedApp />
        </Provider>
    </React.StrictMode>
);

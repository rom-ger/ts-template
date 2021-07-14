import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './modules/App';
import appStore from './modules/appStore';

const stores = { appStore };

ReactDOM.render(
    <React.StrictMode>
        <Provider
                {...stores}
        >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

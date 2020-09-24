import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

const app = (<BrowserRouter>
<App apptitle="Leave a note" />
</BrowserRouter>);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

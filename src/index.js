import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App apptitle="Person Manager" />, document.getElementById('root'));
registerServiceWorker();
 

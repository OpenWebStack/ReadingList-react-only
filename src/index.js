import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
// import App from './App';
import ReadingListContainer from "../src/components/ReadingListContainer";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReadingListContainer />, document.getElementById('root'));
registerServiceWorker();

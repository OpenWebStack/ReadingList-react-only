import React from 'react';
import ReactDOM from 'react-dom';
import ReadingListContainer from "../src/components/ReadingListContainer";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReadingListContainer />, document.getElementById('root'));
registerServiceWorker();

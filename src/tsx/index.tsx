import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App timeLeft={60} reset={() => console.log('hoge')} />, document.getElementById('root'));

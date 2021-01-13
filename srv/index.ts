const getTasks = require('./api/get');
let express = require('express');
let app = express();
console.log('hoge');
// console.log(getFunc);

// DBへの接続

// app.get('/', () => {
// 	console.log('hoge');
// });
// app.get('/api/tasks', (req, res) => {
// 	const status = +req.query.status || 0;

// });

const port = 3001;
app.listen(port);

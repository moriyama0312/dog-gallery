let express = require('express');
let app = express();

app.get('/', () => {
	console.log('hoge');
});
app.get('/api/test', (req: any, res: any) => {
	console.log(req);
	console.log('test');
	res.send({api: 'test'});
});

const port = 3001;
app.listen(port);

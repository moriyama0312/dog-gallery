let express = require('express');
let app = express();

app.get('/', () => {
	console.log('hoge');
});

const port = process.env.PORT || 3001
app.listen(port);

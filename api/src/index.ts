import express from 'express';

const app = express();

app.set("port", 3003);

app.listen(app.get('port'), () => {
	console.log(`listening on port ${app.get("port")}`)
})
const express = require('express');
const app = express();
const port = 3000;
const testRouter = require('./route');

app.use('/', express.static('./dist', {
  index: "index.html"
}));

app.use(express.json());

app.use("/test", testRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
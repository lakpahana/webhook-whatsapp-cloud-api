import express from 'express';

const app = express();
const port = 3000;

const token = ""

app.get('/webhooks',  (req, res) => {
 if (
   req.query['hub.mode'] == 'subscribe' &&
   req.query['hub.verify_token'] == token
 ) {
   res.send(req.query['hub.challenge']);
 } else {
   res.sendStatus(400);
 }
})

app.post('/webhooks', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
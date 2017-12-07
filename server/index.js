const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const PORT = process.env.PORT || 3002;
const CONNECTION_STRING = process.env.CONNECTION_STRING || ``;

const app = express();

massive(CONNECTION_STRING).then(db => app.set('db', db));


app.use(express.static(`${__dirname}/../index.html`))

app.use(cors());
app.use(bodyParser.json());


app.get(`/api/questions`, (req, res, next) => {
    console.log('get', req.body)
    const db = req.app.get('db')
    db.read_questions()
        .then(questions => res.send(questions))
})
app.post(`/api/questions`, (req, res, next) => {
    console.log('post', req.body)
    const db = req.app.get('db')
    db.add_question([req.body.animal, req.body.correct_answer, req.body.difficulty, req.body.question, req.body.options])
        .then(() => {
            db.read_questions()
                .then(questions => res.send(questions))
        })
})
app.put(`/api/questions/:id`, (req, res, next) => {
    console.log('put', req.body)
    const db = req.app.get('db')
    db.update_question([req.params.id, req.body.animal, req.body.correct_answer, req.body.difficulty, req.body.question, req.body.options])
        .then(() => {
            db.read_questions()
                .then(questions => res.send(questions))
        })
})
app.delete(`/api/questions/:id`, (req, res, next) => {
    console.log('delete', req.params.id)
    const db = req.app.get('db')
    db.delete_question([req.params.id])
        .then(() => {
            db.read_questions()
                .then(questions => res.send(questions))
        })
})



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.listen(PORT, () => console.log(`trivia running on port ${PORT}`))

module.exports = app;

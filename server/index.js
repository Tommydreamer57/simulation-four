const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3002;
const CONNECTION_STRING = process.env.CONNECTION_STRING || ``;

const app = express();

massive(CONNECTION_STRING).then(db => app.set('db', db));

// app.use(express.static(`${__dirname}/../build`))
app.use(bodyParser.json());


app.get(`/api/questions`, (req, res, next) => {
    const db = req.app.get('db')
    db.read_questions().then(questions => res.send(questions))
})
app.post(`/api/questions`, (req, res, next) => {
    const db = req.app.get('db')
    console.log(req.body)
    db.add_question([req.body.animal, req.body.correct_answer, req.body.difficulty, req.body.question, req.body.options]).then(() => {
        db.read_questions().then(questions => res.send(questions))
    })
})
app.put(`/api/questions/:id`, (req, res, next) => {
    const db = req.app.get('db')
    db.update_question()
})
app.delete(`/api/questions/:id`, (req, res, next) => {
    const db = req.app.get('db')
    // db.
})



app.listen(PORT, () => console.log(`trivia running on port ${PORT}`))

module.exports = app;

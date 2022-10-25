const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/cousrses.json');

app.get('/', (req, res) => {
    res.send('course api running');
})
//all course api
app.get('/courses', (req, res) => {
    res.send(courses);
})
// single course api
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    const course = courses.find(c => c.id === id);
    console.log(course);
    res.send(course);
})

// app.get('/courses/:id', (req, res) => {
//     console.log(courses);
//     const id = req.params.id;
//     const course = courses.find(n => n._id === id);
//     console.log(course);
//     res.send(course);
// });

app.listen(port, () => {
    console.log('course api running on port');
})
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// app.set('views', 'myviews');

app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<h1>This is Home Page</h1>')
    res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/about',(req,res)=>{
    // res.send('<h1>This is About Us Page</h1>')
    res.sendFile('./public/about.html', {root: __dirname})
});

app.get('/teams',(req,res)=>{
    // res.send('<h1>This is Teams Page</h1>')
    res.sendFile('./public/teams.html', {root: __dirname})
});

app.use((req,res)=>{
    res.sendFile('./public/404.html', {root: __dirname})
})

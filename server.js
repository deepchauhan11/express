const http = require('http');
const fs = require('fs');

const _ = require('lodash')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    
    const randomNum = _.random(100,200);
    console.log(randomNum);

    const welcomeGreet = () => {
        console.log("Welcome to the Project");
    }

    welcomeGreet();

    const welcomeGreetTwo = () => {
        console.log("Welcome Gree Two");
    }

    welcomeGreetTwo();
    welcomeGreetTwo();
    welcomeGreetTwo();

    res.setHeader('Content-Type', 'text/html')

    let path = "./public/"
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/teams':
            path += 'teams.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log("Listening for request done on port 3000")
})
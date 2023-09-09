const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')

app.use('/static', express.static(path.resolve(__dirname,'../dist')));

app.get('/',(req,res) => {
    const htmlFile = path.resolve(__dirname,'../dist/main.html');
    const content = fs.readFileSync(htmlFile,'utf-8');
    res.send(content)
});

app.get('/login',(req,res) => {
    const htmlFile = path.resolve(__dirname,'../dist/login.html');
    const content = fs.readFileSync(htmlFile,'utf-8');
    res.send(content)
});

app.listen(3000,() => {
    console.log("App is running on http://localhost:3000")
})
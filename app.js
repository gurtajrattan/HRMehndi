// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello("Mosh");

// gloal - able to access varibales all over code
// process - gives you access to the currently running node process, use it to check current system or operation system
// 
const { readFile } = require('fs');

const express = require('express');

const app = express();
app.use(express.static(__dirname)); // Serves static files from the same directory


app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err,html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }

        response.send(html);
    })

})

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

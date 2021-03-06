const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./db/index');

//routes
const organization = require('./routes/organization.route');
const user = require('./routes/user.route');
const organizationController = require('./controllers/organization.controller');
const userController = require('./controllers/user.controller');

const app = express();
const port = 3000
db();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello Baba')
})

app.use(organization);
app.use(user);

app.listen(port, () => {
    console.log('Server port: ', port);
});


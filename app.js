// Get the express package 
const express = require('express');
const mariadb = require('mariadb')
const nodemon = require('nodemon')
// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;


// to tell the server to serve the static files from the public folder

app.use(express.static('public'));


// configure connection

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Black202',
    database: 'guestbook'
});

// Connect to the database
async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database: ' + err);
    }
}

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    // Log message to the server's console
	console.log("Hello, world - server!");
    res.render('home');
});

app.post('/success',  async (req, res) => {

    let details = req.body;
    // confirming were capturing it locally 

    const data = {
        fname : req.body.fname,
        lname : req.body.lname,
        jobtitile : req.body.jobt,
        company : req.body.company,
        linkedin : req.body.linkedin,
        email : req.body.email,
        meeting : req.body.meeting,
        message : req.body.message,
        mailinglist : req.body.mailinglist
    };

    console.log(data);

    //Connect to the database
    const conn = await connect();

    //Insert the query into the database. 
    res.render('success');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

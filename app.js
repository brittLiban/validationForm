const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/success', (req, res) => {
    const data = req.body;
    res.send(data);   
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

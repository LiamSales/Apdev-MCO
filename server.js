const express = require('express');
const app = express();

const path = require('path');

const usersData = [
{
    username: juandelacruz,
    password: myPassword123,
    type: student
}
];


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {


});

app.get('/reviews',(req, res) => {
    res.render("reviews", {
        establishments: "Jolibee",
    });

});




app.listen(3000);
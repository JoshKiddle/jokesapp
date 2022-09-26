const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const express = require("express");
const path = require("path");

(async () => {
    const db = await sqlite.open({
        filename: './JokeDBSQL.db',
        driver: sqlite3.Database
    })

    var app = express();

    app.set('views', path.join(__dirname, "views"))
    app.set('view engine', 'pug');

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', async (req, res) => { await get_one_joke(req, res, db) });

    app.listen(3000, function () {
        console.log(" > Listening on port 3000")
    });
})()

const randomNumber = (min, max) => Math.round((Math.random() * (max - min) + min));

async function get_one_joke(req, res, db) {
    let result = await db.all("SELECT * FROM 'JokeDB'");
    let joke = result[randomNumber(0, result.length)];
    res.render('index', { title: 'Home', joke });
}
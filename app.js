const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

// CREATE
app.route("/todo")
    .post(async (req, res) => {
        try {
            const { description } = req.body;
            const newTodo = await pool.query(
                "INSERT INTO todo (description) VALUES($1) RETURNING *",
                [description]
            );
            res.json(newTodo.rows[0]);

        } catch (err) {
            console.error(err.message);
        }
    })
    // READ
    .get(async (req, res) => {
        try {
            const allTodo = await pool.query(
                "SELECT * FROM todo"
            );
            res.json(allTodo.rows);

        } catch (err) {
            console.error(err.message);
        }
    });
// UPDATE

// DELETE

const port = 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})



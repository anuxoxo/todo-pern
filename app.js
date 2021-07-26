const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

// CREATE
app.route("/todos")
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
    })

// UPDATE
app.route("/todos/:id")
    .put(async (req, res) => {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const updatedTodo = await pool.query(
                "UPDATE todo SET description = $1 where todo_id = $2;",
                [description, id]
            );

            res.json("Todo list updated.");

        } catch (err) {
            console.error(err.message);
        }
    })

    // DELETE
    .delete(async (req, res) => {
        try {
            const { id } = req.params;
            const delTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
            res.json("Todo Deleted.");
        } catch (err) {
            console.error(err.message);
        }
    })

const port = 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})



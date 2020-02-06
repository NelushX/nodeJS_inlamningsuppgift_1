const express = require("express");
const Todo = require("../model/todoSchema");
const router = express.Router();

router.route("/")
    .get(async (req, res) => {
        const sort = req.query.sort;
        const findTodo = await Todo.find().sort({ text:sort });
        res.render("index", { findTodo, title: "To-Do List" })
    })
    .post(async (req, res) => {
        await new Todo({ text: req.body.text }).save();
        res.redirect("/");
    });

router.get("/delete/:id", async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id });
    res.redirect("/")
});

router.route("/update/:id")
    .get(async (req, res) => {
        const updateTodo = await Todo.findById({ _id: req.params.id });
        res.render("update", { updateTodo, title: "Update Todo"});
    })
    .post(async (req, res) => {
        await Todo.updateOne({ _id: req.params.id }, { $set: { text: req.body.text } }, { runValidators: true });
        res.redirect("/");
    })

module.exports = router;
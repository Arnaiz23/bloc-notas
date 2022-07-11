const Note = require("../models/Notes");

const controllers = {
  addNote: async (req, res) => {
    const { title, content, user } = req.body;

    if (title === "" || content === "" || user === "") {
      return res.status(404).json({
        message: "Content empty",
      });
    }

    const newNote = await Note.create({ title, content, user });

    if (!newNote) {
      return res.send("The note has not been created");
    }

    return res.status(201).json({
      status: 201,
    });
  },
  getNotes: async (req, res) => {
    const notes = await Note.find().sort({ date: "desc" });

    if (!notes || notes.length <= 0) {
      return res.status(404).json({
        message: "Empty",
      });
    }

    return res.status(200).json(notes);
  },
};

module.exports = controllers;

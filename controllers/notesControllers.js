const { getNotes, getNote, createNote } = require("../services/database");

module.exports = {
  get_all_notes: async (req, res) => {
    try {
      const notes = await getNotes();
      res.status(200).send(notes);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  get_a_note: async (req, res) => {
    const id = req.params.id;
    try {
      const note = await getNote(id);
      res.status(200).send(note);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  create_a_note: async (req, res) => {
    const { title, content } = req.body;
    try {
      const result = await createNote(title, content);
      res.status(201).send(result);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
};

const notesControllers = require("../controllers/notesControllers");

module.exports = (app) => {
  app
    .route("/notes")
    .get(notesControllers.get_all_notes)
    .post(notesControllers.create_a_note);

  app.route("/notes/:id").get(notesControllers.get_a_note);
};

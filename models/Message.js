const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  content: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.models.Message || mongoose.model("Message", messageSchema);
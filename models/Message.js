const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, "please fill all details"]
  },
  wallet: {
    type: String,
    required: [true, "please fill all details"]
  },
});

module.exports = mongoose.models.Message || mongoose.model("Message", messageSchema);
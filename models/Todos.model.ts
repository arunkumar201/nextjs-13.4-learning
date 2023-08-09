import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todos = mongoose.models.Todos || mongoose.model("Todos", todosSchema);

export default Todos;

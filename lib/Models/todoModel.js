import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: Boolean
});

export default mongoose.models.Todo || mongoose.model('Todo', todoSchema, 'todos');
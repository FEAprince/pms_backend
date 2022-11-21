const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TasksSchema = new Schema(
  {
    tasksName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    taskStartDate: {
      type: String,
      required: true,
      trim: true,
    },
    taskEndDate: {
      type: String,
      required: true,
      trim: true,
    },
    taskPriority: {
      type: String,
      required: true,
      trim: true,
      enum: ["1", "3", "5", "8"],
    },
    projectId: {
      type: mongoose.Types.ObjectId,
      required: false,
      trim: true,
      ref: "projects",
    },
    assignUsers: [
      {
        type: mongoose.Types.ObjectId,
        required: false,
        trim: true,
        ref: "user",
      },
    ],

    isActive: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const Tasks = mongoose.model("tasks", TasksSchema);
module.exports = Tasks;

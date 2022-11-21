const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectDescription: {
      type: String,
      required: true,
      trim: true,
    },
    projectStartDate: {
      type: String,
      required: true,
      trim: true,
    },
    projectEndDate: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: "user",
      trim: true,
    },
    isActive: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const Projects = mongoose.model("projects", ProjectsSchema);
module.exports = Projects;

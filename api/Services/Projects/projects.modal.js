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
    projectStatus: {
      type: String,
      required: true,
      trim: true,
      enum: ["Approval", "Accepted", "Completed"],
      default: "Approval",
    },
    assignUsers: [
      {
        type: mongoose.Types.ObjectId,
        required: false,
        trim: true,
        ref: "user",
      },
    ],
    categoryId: [
      {
        type: mongoose.Types.ObjectId,
        required: false,
        trim: true,
        ref: "category",
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
const Projects = mongoose.model("projects", ProjectsSchema);
module.exports = Projects;

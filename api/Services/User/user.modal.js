const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { randomUUID } = require("crypto");
const UserSchema = new Schema(
  {
    userImg: {
      type: String,
      trim: true,
      default: " ",
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      trim: true,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
      trim: true,
    },
    bio: {
      type: String,
      default: "",
      trim: true,
    },
    employeeId: {
      type: String,
      trim: true,
      default: randomUUID().toUpperCase().slice(0, 7),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      trim: true,
      default: "",
    },
    position: {
      type: String,
      trim: true,
      enum: ["Admin", "SuperAdmin", "Employee"],
      default: "Employee",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", UserSchema);
module.exports = User;

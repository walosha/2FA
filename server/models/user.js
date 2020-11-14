const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Caller ID is required"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please Provide us your email address"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide a Valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false, //THIS OPTION HIDE THE PASSWORD FROM BEING RETURNED TO USERS
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  passswordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpiry: Date,
});

userSchema.pre("save", async function (next) {
  // RUN THIS IF PASSWORD IS NOT MODIFIED
  if (!this.isModified("password")) return next();
  // RUN THIS IF PASSWORD IS CREATED OR MODIFIED
  this.password = await bycrypt.hash(this.password, 5);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bycrypt.compare(candidatePassword, userPassword);
};

userSchema.pre(/^find/, function (next) {
  this.find({ active: true });
  //this.find({ active: { $ne: false } }); Used when there are other documents that are neither true or false
  next();
});

// THIS COMAPARE PASSWORD INPUT BY USER AND THE ONE ON DB BY FIRST DECRPTYING IT
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bycrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

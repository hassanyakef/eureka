const mongoose = require('mongoose');
const db = require('./keys').mongoURI;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected`);
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
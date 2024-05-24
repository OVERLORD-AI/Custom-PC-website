const mongoose= require("mongoose");



// Connect to MongoDB
const dbconnction =mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
module.exports=dbconnction

// Define your mongoose schema and models here
// Example:
// const Schema = mongoose.Schema;
// const SomeModelSchema = new Schema({
//   name: String,
// });
// const SomeModel = mongoose.model('SomeModel', SomeModelSchema);

// Now you can start using your models and perform CRUD operations

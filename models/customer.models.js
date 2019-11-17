let mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:admin@cluster0-45jvo.mongodb.net/test?retryWrites=true&w=majority`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./config/keys').mongoURI;
var mongoose = require('mongoose');
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected mother fucker'))
  .catch(err => console.log(err));

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)


app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true
            })
        );
app.use(cors());

app.use('/test', require('./routes/routes'))

app.listen(port, () => {
console.log("Server is running on " + port + "port");
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb://localhost:27017/appsetting';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', err => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const airplaneModeRoutes = require('./routes/airplaneModeRoutes'); 
const displayRoutes = require('./routes/displayRoutes'); 
const autoRoutes = require('./routes/autoRoutes');


app.use(airplaneModeRoutes); 
app.use(displayRoutes);
app.use(autoRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
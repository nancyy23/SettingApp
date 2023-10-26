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
const eyeComfortRoutes = require('./routes/eyeRoutes'); 
const videoRoutes = require('./routes/videoRoutes');
const doRoutes = require('./routes/doRoutes');
const soundSettingsRoutes = require('./routes/soundSettingsRoutes');

app.use(soundSettingsRoutes);
app.use(airplaneModeRoutes); 
app.use(displayRoutes);
app.use(autoRoutes);
app.use(eyeComfortRoutes);
app.use(videoRoutes);
app.use(doRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
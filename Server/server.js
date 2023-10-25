const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); 
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use(cors());

const mongoURI = 'mongodb://localhost:27017/airplane-mode'; // 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', err => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const airplaneModeSchema = new mongoose.Schema({
  enabled: Boolean,
});

const AirplaneMode = mongoose.model('AirplaneMode', airplaneModeSchema);

let isAirplaneModeEnabled = false;

app.post('/api/airplane-mode', async (req, res) => {
  const { enabled } = req.body;

  isAirplaneModeEnabled = enabled;
  const doc = await AirplaneMode.findOneAndUpdate({}, { enabled }, { new: true, upsert: true });
  
  res.json({ enabled: doc.enabled });
});

app.get('/api/airplane-mode', async (req, res) => {
  const doc = await AirplaneMode.findOne();
  if (doc) {
    isAirplaneModeEnabled = doc.enabled;
  }
  res.json({ enabled: isAirplaneModeEnabled });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
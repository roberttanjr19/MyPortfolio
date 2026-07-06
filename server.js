const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application.' });
});

app.use('/api/contacts', require('./server/routes/contact.routes'));
app.use('/api/projects', require('./server/routes/project.routes'));
app.use('/api/qualifications', require('./server/routes/qualification.routes'));
app.use('/api/users', require('./server/routes/user.routes'));
app.use('/auth', require('./server/routes/auth.routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`);
});

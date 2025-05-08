const express = require('express');
const cors = require('cors');
const analyzeRoutes = require('./routes/analyze');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/analyze', analyzeRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


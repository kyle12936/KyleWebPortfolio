const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Kyle_Miranda_Resume.pdf', (req, res) => {
  res.download(path.join(__dirname, 'Kyle_Miranda_Resume.pdf'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
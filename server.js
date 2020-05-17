const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();

app.get('/images/:imageName', (req, res) => {
    res.sendFile('/Users/gonzalo/Desktop/Desk/backupPhotos/' + req.params.imageName);
});

app.listen(5000, () =>
  console.log(`App listening on port 5000!`),
);
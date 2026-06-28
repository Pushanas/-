const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data.ts', 'utf8');
const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g;
const matches = [...new Set(content.match(regex))];

matches.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  }).on('error', (e) => {
    console.error(e);
  });
});

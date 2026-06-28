const https = require('https');
const urls = [
"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
"https://images.unsplash.com/photo-1527477396000-e27163b481c2",
"https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
"https://images.unsplash.com/photo-1532550907401-a500c9a57435",
"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46",
"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
"https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
"https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
"https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
"https://images.unsplash.com/photo-1551024709-8f23befc6f87",
"https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
"https://images.unsplash.com/photo-1544025162-811114cd6e36",
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
"https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
"https://images.unsplash.com/photo-1543007630-9710e4a00a20"
];
urls.forEach(url => {
  https.get(url, (res) => {
    console.log(res.statusCode, url);
  });
});
